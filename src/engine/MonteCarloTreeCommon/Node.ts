import { INCREMENT_ONE, Integer } from "src/types";
import Game, { Player } from "../Game/Game";
import Move, { KeyedMove } from "../Game/Move";
import State, { Points, TurnOutcome } from "../Game/State";

const EMPTY_CHILDREN_LIST = 0;
const MINIMUM_VICTORY_QUALITY = 0;
const MINIMUM_QUANTITY_OF_VISITS = 0;

interface NodeParams<G extends Game<M>, M extends Move> {
  state: State<G, M>;
  explorationConstant: number;
  parent: Node<G, M> | null;
}

export class Node<G extends Game<M>, M extends Move> {
  private readonly state: NodeParams<G, M>["state"];
  private readonly explorationConstant: NodeParams<G, M>["explorationConstant"];
  private readonly parent: NodeParams<G, M>["parent"];

  private readonly children: Node<G, M>[] = [];
  private readonly moveInIndexIsExpandable: Map<Integer, boolean>;

  private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
  private victoryQuality: Integer = MINIMUM_VICTORY_QUALITY;

  private readonly initialPlayer: Player;

  constructor({ explorationConstant, parent, state }: NodeParams<G, M>) {
    this.state = state;
    this.explorationConstant = explorationConstant;
    this.parent = parent ? parent : null;
    this.initialPlayer = state.getCurrentPlayer();

    const indexesOfValidMoves = Array.from(state.getIndexesOfValidMoves());
    this.moveInIndexIsExpandable = new Map(
      indexesOfValidMoves.map((index: number): [Integer, boolean] => [
        index,
        false,
      ]),
    );
  }

  /* Getters */

  public getChildren(): Node<G, M>[] {
    return this.children;
  }

  private getIndexesOfNonExpandedMoves(): Set<Integer> {
    return new Set(
      Array.from(this.moveInIndexIsExpandable.entries())
        .filter(([, isExpanded]) => !isExpanded)
        .map(([index]) => index),
    );
  }

  public getQuantityOfVisits(): Integer {
    return this.quantityOfVisits;
  }

  public getState(): State<G, M> {
    return this.state.clone();
  }

  /* Setters */

  private setMoveAsExpanded(index: Integer) {
    if (!this.moveInIndexIsExpandable.has(index)) {
      throw new Error("Invalid move index");
    }

    this.moveInIndexIsExpandable.set(index, true);
  }

  /* Methods */

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    return Array.from(this.moveInIndexIsExpandable.values()).every(
      isExpanded => isExpanded,
    );
  }

  /// Get the UCB value of a given child.
  private getChildUcb(child: Node<G, M>): number {
    // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning

    const exploitation =
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      1 - (child.victoryQuality / child.quantityOfVisits + 1) / 2;

    const exploration =
      this.explorationConstant *
      Math.sqrt(Math.log(this.quantityOfVisits) / child.quantityOfVisits);

    return exploitation + exploration;
  }

  /// Select the best node among children, i.e. the one with the highest UCB.
  public selectBestChild(): Node<G, M> {
    if (this.children.length === EMPTY_CHILDREN_LIST)
      throw new Error("No children to select from");

    let [bestChild] = this.children;
    if (!bestChild) throw new Error("No children to select from");
    let bestUcb = this.getChildUcb(bestChild);
    const quantityOfChildren = this.children.length;

    for (
      let currentChildIndex = 1;
      currentChildIndex < quantityOfChildren;
      currentChildIndex += INCREMENT_ONE
    ) {
      const child = this.children[currentChildIndex];
      if (!child) throw new Error("No children to select from");

      const ucb = this.getChildUcb(child);
      if (ucb > bestUcb) {
        bestChild = child;
        bestUcb = ucb;
      }
    }

    return bestChild;
  }

  /// Pick a random move from the list of valid moves.
  private pickRandomMove(): KeyedMove<M> {
    const indexesOfNonExpandedMoves = this.getIndexesOfNonExpandedMoves();
    const expandableMoves = Array.from(indexesOfNonExpandedMoves).map(
      index => ({
        key: index,
        move: this.state.getGame().getMove(index),
      }),
    );

    const randomIndex = Math.floor(Math.random() * expandableMoves.length);
    const selectedMove = expandableMoves[randomIndex];

    if (typeof selectedMove === "undefined")
      throw Error("No valid moves to pick from");
    return selectedMove;
  }

  /// Pick a random action and perform it, returning the outcome state as a child node.
  public expand(): Node<G, M> {
    const selectedMove = this.pickRandomMove();
    this.setMoveAsExpanded(selectedMove.key);

    // Copy the state and play the action on the copy
    const newState = this.state.playMove(selectedMove.move);
    const newStateInTheInitialPlayerPerspective = newState.changePerspective(
      this.initialPlayer,
    );

    const child = new Node({
      explorationConstant: this.explorationConstant,
      parent: this,
      state: newStateInTheInitialPlayerPerspective,
    });
    this.children.push(child);
    return child;
  }

  /// Simulate a game from the current state, returning the outcome value.
  public simulate(): TurnOutcome["points"] {
    // Copy the state and play random actions, with alternate players, until the game is over
    let rolloutState = this.state.clone();
    for (;;) {
      const { points, gameHasEnded } = rolloutState.getTurnOutcome();
      if (gameHasEnded) return points;

      const selectedMove = this.pickRandomMove();
      rolloutState = rolloutState.playMove(selectedMove.move);
    }
  }

  /// Backpropagate the outcome value to the root node.
  public backpropagate(pointsAfterTheLastTurn: Map<Player, Points>) {
    const initialPlayerPoints = pointsAfterTheLastTurn.get(this.initialPlayer);

    this.victoryQuality += initialPlayerPoints
      ? initialPlayerPoints
      : MINIMUM_VICTORY_QUALITY;

    this.quantityOfVisits += INCREMENT_ONE;

    if (this.parent) this.parent.backpropagate(pointsAfterTheLastTurn);
  }
}
