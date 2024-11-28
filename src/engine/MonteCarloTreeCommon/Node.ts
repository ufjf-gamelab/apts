import { INCREMENT_ONE, Integer } from "src/types";
import Game from "../Game/Game";
import Move, { MoveKey, MovePair } from "../Game/Move";
import Player from "../Game/Player";
import State, { Scoreboard } from "../Game/State";

const EMPTY_CHILDREN_LIST = 0;
const MINIMUM_VICTORY_QUALITY = 0;
const MINIMUM_QUANTITY_OF_VISITS = 0;

interface NodeParams<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  state: S;
  keyOfTheTakenMove: MoveKey | null;
  explorationConstant: number;
  parent: Node<P, M, S, G> | null;
}

export class Node<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly state: NodeParams<P, M, S, G>["state"];
  private readonly keyOfTheTakenMove: NodeParams<
    P,
    M,
    S,
    G
  >["keyOfTheTakenMove"];
  private readonly explorationConstant: NodeParams<
    P,
    M,
    S,
    G
  >["explorationConstant"];
  private readonly parent: NodeParams<P, M, S, G>["parent"];

  private readonly children: Node<P, M, S, G>[] = [];
  private readonly moveIsExpanded: Map<MoveKey, boolean>;

  private quantityOfVisits: Integer = MINIMUM_QUANTITY_OF_VISITS;
  private victoryQuality: number = MINIMUM_VICTORY_QUALITY;

  constructor({
    state,
    keyOfTheTakenMove,
    explorationConstant,
    parent,
  }: NodeParams<P, M, S, G>) {
    this.state = state;
    this.keyOfTheTakenMove = keyOfTheTakenMove;
    this.explorationConstant = explorationConstant;
    this.parent = parent ? parent : null;
    this.moveIsExpanded = new Map(
      state
        .getValidMovesKeys()
        .map((key: MoveKey): [MoveKey, boolean] => [key, false]),
    );
  }

  /* Getters */

  public getChildren(): Node<P, M, S, G>[] {
    return this.children;
  }

  private getKeysOfNonExpandedMoves(): Set<MoveKey> {
    return new Set(
      Array.from(this.moveIsExpanded.entries())
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

  public getState(): S {
    return this.state;
  }

  /* Setters */

  private setMoveAsExpanded(key: MoveKey) {
    if (this.moveIsExpanded.has(key)) {
      throw new Error("Invalid move key");
    }
    this.moveIsExpanded.set(key, true);
  }

  /* Methods */

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    return Array.from(this.moveIsExpanded.values()).every(
      isExpanded => isExpanded,
    );
  }

  /// Get the UCB value of a given child.
  private getChildUcb(child: Node<P, M, S, G>): number {
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
  public selectBestChild(): Node<P, M, S, G> {
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
  private pickRandomMove(): MovePair<P, M, S, G> {
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
  public expand(): Node<P, M, S, G> {
    const selectedMove = this.pickRandomMove();
    this.setMoveAsExpanded(selectedMove.key);

    // Copy the state and play the action on the copy
    const nextState = selectedMove.move.play(this.state);
    const nextStateInTheInitialPlayerPerspective = nextState.changePerspective(
      this.state.getPlayerKey(),
    );

    const child = new Node({
      explorationConstant: this.explorationConstant,
      keyOfTheTakenMove: selectedMove.key,
      parent: this,
      state: nextStateInTheInitialPlayerPerspective,
    });
    this.children.push(child);
    return child;
  }

  /// Simulate a game from the current state, returning the outcome value.
  public simulate(): Scoreboard {
    // Copy the state and play random actions, with alternate players, until the game is over
    let rolloutState = this.state.clone();
    for (;;) {
      const scoreboard = rolloutState.getScoreboard();
      const isFinal = rolloutState.isFinal();
      if (isFinal) return scoreboard;

      const selectedMove = this.pickRandomMove();
      rolloutState = selectedMove.move.play(rolloutState);
    }
  }

  /// Backpropagate the outcome value to the root node.
  public backpropagate(scoreboard: Scoreboard): void {
    const playerKey = this.state.getPlayerKey();
    const pointsEarnedByThePlayer = scoreboard[playerKey];
    if (typeof pointsEarnedByThePlayer === "undefined")
      throw new Error("Invalid player");

    this.victoryQuality += pointsEarnedByThePlayer;
    this.quantityOfVisits += INCREMENT_ONE;

    if (this.parent) this.parent.backpropagate(scoreboard);
  }
}
