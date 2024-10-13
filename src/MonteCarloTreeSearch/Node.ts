import Game, { ActionOutcome } from "src/Game/Game";
import State, { Action, Player } from "src/Game/State";

const MINIMUM_VISIT_COUNT = 0;
const MINIMUM_VALUE_SUM = 0;
export const MINIMUM_PROBABILITY = 0;
const EMPTY_CHILDREN_LIST = 0;

export class Node {
  private game: Game;
  // State of the game at this node
  private state: State;
  private numSearches: number;
  private explorationConstant: number;
  private parent: Node | null;
  // Action that led to this node
  private actionTaken: Action | null;
  // Probability of taking the action that led to this node
  private priorProbability: number;

  private children: Node[] = [];
  private visitCount = MINIMUM_VISIT_COUNT;
  private valueSum = MINIMUM_VALUE_SUM;

  constructor({
    game,
    state,
    numSearches,
    explorationConstant,
    parent,
    actionTaken,
    priorProbability,
  }: {
    game: Game;
    state: State;
    numSearches: number;
    explorationConstant: number;
    parent?: Node;
    actionTaken?: Action;
    priorProbability?: number;
  }) {
    this.game = game;
    this.state = state;
    this.numSearches = numSearches;
    this.explorationConstant = explorationConstant;
    this.parent = parent ? parent : null;
    this.actionTaken = typeof actionTaken === "number" ? actionTaken : null;
    this.priorProbability = priorProbability
      ? priorProbability
      : MINIMUM_PROBABILITY;
  }

  /* Getters */

  public getState(): State {
    return this.state;
  }

  public getActionTaken(): Action | null {
    return this.actionTaken;
  }

  public getChildren(): Node[] {
    return this.children;
  }

  public getVisitCount(): number {
    return this.visitCount;
  }

  /* Methods */

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    return this.children.length > EMPTY_CHILDREN_LIST;
  }

  /// Get the UCB value of a given child.
  private getChildUcb(child: Node): number {
    let exploitation = 0;
    if (this.visitCount > MINIMUM_VISIT_COUNT)
      // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      exploitation = 1 - child.valueSum / (child.visitCount + 1) / 2;
    const exploration =
      this.explorationConstant *
      child.priorProbability *
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      (Math.sqrt(this.visitCount) / (child.visitCount + 1));
    return exploitation + exploration;
  }

  /// Select the best node among children, i.e. the one with the highest UCB.
  public selectBestChild(): Node {
    if (this.children.length === EMPTY_CHILDREN_LIST)
      throw new Error("No children to select from!");

    let bestChild = this.children[EMPTY_CHILDREN_LIST];
    if (!bestChild) throw new Error("No children to select from!");
    let bestUcb = this.getChildUcb(bestChild);

    for (
      let currentChildIndex = 1;
      currentChildIndex < this.children.length;
      currentChildIndex++
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

  /// Pick a random action and perform it, returning the outcome state as a child node.
  public expand(policy: number[]) {
    policy.forEach((probability, action) => {
      if (probability > MINIMUM_PROBABILITY) {
        // Copy the state and play the action on the copy
        const childState = this.state.clone();
        childState.performAction(action, Player.X);
        childState.changePerspective(Player.X, Player.O);

        const child = new Node({
          actionTaken: action,
          explorationConstant: this.explorationConstant,
          game: this.game,
          numSearches: this.numSearches,
          parent: this,
          priorProbability: probability,
          state: childState,
        });
        this.children.push(child);
      }
    });
  }

  /// Backpropagate the outcome value to the root node.
  public backpropagate(outcomeValue: ActionOutcome["value"]) {
    this.valueSum += outcomeValue;
    this.visitCount++;
    const opponentValue = this.game.getOpponentValue(outcomeValue);
    if (this.parent !== null) this.parent.backpropagate(opponentValue);
  }
}
