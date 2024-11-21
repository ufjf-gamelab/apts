import { INCREMENT_ONE, Integer } from "src/types";
import Game from "../Game/Game";
import Move, { KeyedMove, MoveKey } from "../Game/Move";
import State, { TurnOutcome } from "../Game/State";

const EMPTY_CHILDREN_LIST = 0;
const MINIMUM_VICTORY_QUALITY = 0;
const MINIMUM_QUANTITY_OF_VISITS = 0;

interface NodeParams<G extends Game<M>, M extends Move> {
  state: State<G, M>;
  keyOfTheTakenMove: MoveKey | null;
  explorationConstant: number;
  parent: Node<G, M> | null;
}

export class Node<G extends Game<M>, M extends Move> {
  private readonly state: NodeParams<G, M>["state"];
  private readonly keyOfTheTakenMove: NodeParams<G, M>["keyOfTheTakenMove"];
  private readonly explorationConstant: NodeParams<G, M>["explorationConstant"];
  private readonly parent: NodeParams<G, M>["parent"];

  private readonly children: Node<G, M>[] = [];
  private readonly moveIsExpandable: Map<MoveKey, boolean>;

  private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
  private victoryQuality: number = MINIMUM_VICTORY_QUALITY;

  constructor({
    state,
    keyOfTheTakenMove,
    explorationConstant,
    parent,
  }: NodeParams<G, M>) {
    this.state = state;
    this.keyOfTheTakenMove = keyOfTheTakenMove;
    this.explorationConstant = explorationConstant;
    this.parent = parent ? parent : null;

    const keysOfTheValidMoves = Array.from(state.getKeysOfTheValidMoves());
    this.moveIsExpandable = new Map(
      keysOfTheValidMoves.map((index: number): [MoveKey, boolean] => [
        index,
        false,
      ]),
    );
  }

  /* Getters */

  public getChildren(): Node<G, M>[] {
    return this.children;
  }

  private getKeysOfNonExpandedMoves(): Set<MoveKey> {
    return new Set(
      Array.from(this.moveIsExpandable.entries())
        .filter(([, isExpanded]) => !isExpanded)
        .map(([index]) => index),
    );
  }

  public getKeyOfTheTakenMove(): Integer | null {
    return this.keyOfTheTakenMove;
  }

  public getQuantityOfVisits(): Integer {
    return this.quantityOfVisits;
  }

  public getState(): State<G, M> {
    return this.state.clone();
  }

  /* Setters */

  private setMoveAsExpanded(key: MoveKey) {
    if (!this.moveIsExpandable.has(key)) {
      throw new Error("Invalid move key");
    }

    this.moveIsExpandable.set(key, true);
  }

  /* Methods */

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    return Array.from(this.moveIsExpandable.values()).every(
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
    const indexesOfNonExpandedMoves = this.getKeysOfNonExpandedMoves();
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
      this.state.getPlayer(),
    );

    const child = new Node({
      explorationConstant: this.explorationConstant,
      keyOfTheTakenMove: selectedMove.key,
      parent: this,
      state: newStateInTheInitialPlayerPerspective,
    });
    this.children.push(child);
    return child;
  }

  /// Simulate a game from the current state, returning the outcome value.
  public simulate(): TurnOutcome["scoreboard"] {
    // Copy the state and play random actions, with alternate players, until the game is over
    let rolloutState = this.state.clone();
    for (;;) {
      const { scoreboard, gameHasEnded } = rolloutState.getTurnOutcome();
      if (gameHasEnded) return scoreboard;

      const selectedMove = this.pickRandomMove();
      rolloutState = rolloutState.playMove(selectedMove.move);
    }
  }

  /// Backpropagate the outcome value to the root node.
  public backpropagate(scoreboard: TurnOutcome["scoreboard"]): void {
    const pointsEarnedByThePlayer = scoreboard.get(this.state.getPlayer());
    if (typeof pointsEarnedByThePlayer === "undefined")
      throw new Error("Invalid player");

    this.victoryQuality += pointsEarnedByThePlayer;
    this.quantityOfVisits += INCREMENT_ONE;

    if (this.parent) this.parent.backpropagate(scoreboard);
  }
}
