import { INCREMENT_ONE, Integer } from "src/types";
import Game from "../Game/Game";
import State, {
  Move,
  Player,
  Points,
  TurnOutcome,
  ValidMove,
} from "../Game/State";

const EMPTY_CHILDREN_LIST = 0;
const MINIMUM_VALID_MOVES = 0;
const MINIMUM_VICTORY_QUALITY = 0;
const MINIMUM_QUANTITY_OF_VISITS = 0;

interface NodeParams<G extends Game> {
  state: State<G>;
  explorationConstant: number;
  parent: Node<G> | null;
}

export class Node<G extends Game> {
  private readonly state: NodeParams<G>["state"];
  private readonly explorationConstant: NodeParams<G>["explorationConstant"];
  private readonly parent: NodeParams<G>["parent"];

  private readonly children: Node<G>[] = [];
  // Marks whether the move has been explored
  private readonly expandableMoves: ValidMove[] = [];

  private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
  private victoryQuality: Integer = MINIMUM_VICTORY_QUALITY;

  private readonly initialPlayer: Player;

  constructor({ explorationConstant, parent, state }: NodeParams<G>) {
    this.state = state;
    this.explorationConstant = explorationConstant;
    this.parent = parent ? parent : null;

    this.expandableMoves = this.state.getValidMoves();
    this.initialPlayer = state.getCurrentPlayer();
  }

  /* Getters */

  public getChildren(): Node<G>[] {
    return this.children;
  }

  public getQuantityOfVisits(): Integer {
    return this.quantityOfVisits;
  }

  public getState(): State<G> {
    return this.state;
  }

  /* Methods */

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    const expandableMoves = this.expandableMoves.reduce<Integer>(
      (count, currentIsValid) =>
        currentIsValid ? count + INCREMENT_ONE : count,
      MINIMUM_VALID_MOVES,
    );
    return expandableMoves === MINIMUM_VALID_MOVES;
  }

  /// Get the UCB value of a given child.
  private getChildUcb(child: Node<G>): number {
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
  public selectBestChild(): Node<G> {
    if (this.children.length === EMPTY_CHILDREN_LIST)
      throw new Error("No children to select from!");

    let [bestChild] = this.children;
    if (!bestChild) throw new Error("No children to select from!");
    let bestUcb = this.getChildUcb(bestChild);

    for (
      let currentChildIndex = 1;
      currentChildIndex < this.children.length;
      currentChildIndex += INCREMENT_ONE
    ) {
      const child = this.children[currentChildIndex];
      if (!child) throw new Error("No children to select from!");
      const ucb = this.getChildUcb(child);
      if (ucb > bestUcb) {
        bestChild = child;
        bestUcb = ucb;
      }
    }
    return bestChild;
  }

  /// Pick a random move from the list of valid moves.
  private pickRandomMove(): Move {
    const validMoves: Move[] = this.expandableMoves.reduce<Move[]>(
      (actions, currentIsValid, index) =>
        currentIsValid ? [...actions, index] : actions,
      [],
    );

    const randomIndex = Math.floor(Math.random() * validMoves.length);
    const selectedMove = validMoves[randomIndex];

    if (typeof selectedMove !== "number")
      throw new Error("No valid actions to pick from!");
    return selectedMove;
  }

  /// Pick a random action and perform it, returning the outcome state as a child node.
  public expand(): Node<G> {
    const selectedMove = this.pickRandomMove();
    this.expandableMoves[selectedMove] = false;

    // Copy the state and play the action on the copy
    const newState = this.state.playMove(selectedMove);
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
      rolloutState = rolloutState.playMove(selectedMove);
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
