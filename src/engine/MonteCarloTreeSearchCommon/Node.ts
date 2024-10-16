import Game, { ActionOutcome } from "../Game/Game";
import State, { Action, ValidAction } from "../Game/State";

const EMPTY_CHILDREN_LIST = 0;
const MINIMUM_VALID_ACTIONS = 0;
const MINIMUM_VALUE_SUM = 0;
const MINIMUM_VISIT_COUNT = 0;

interface MonteCarloTreeSearchParams<G extends Game> {
  explorationConstant: number;
  quantityOfSearches: number;
  state: State<G>;
  parent: Node<G> | null;
}

export class Node<G extends Game> {
  private params: MonteCarloTreeSearchParams;
  private state: State<G>;
  private parent: Node<G> | null;
  private takenMove: Action | null;

  private children: Node<G>[] = [];
  private expandableActions: ValidAction[] = [];

  private visitCount: number = MINIMUM_VISIT_COUNT;
  private valueSum: number = MINIMUM_VALUE_SUM;

  constructor({
    params,
    game,
    state,
    parent,
    actionTaken,
  }: {
    params: MonteCarloTreeSearchParams;
    game: Game;
    state: State<G>;
    parent?: Node<G>;
    actionTaken?: Action;
  }) {
    this.params = params;
    this.game = game;
    this.state = state;
    this.parent = parent ? parent : null;
    this.actionTaken = typeof actionTaken === "number" ? actionTaken : null;
    this.expandableActions = this.state.getValidActions();
  }

  /* Getters */

  public getState(): State<G> {
    return this.state;
  }

  public getTakenAction(): Action | null {
    return this.actionTaken;
  }

  public getChildren(): Node<G>[] {
    return this.children;
  }

  public getVisitCount(): number {
    return this.visitCount;
  }

  /* Methods */

  /// Check if the node is fully expanded, i.e. all valid actions have been explored.
  public isFullyExpanded(): boolean {
    const INCREMENT_ACTION_COUNTER = 1;
    const numValidActions = this.expandableActions.reduce(
      (counter, actionIsValid) =>
        counter +
        (actionIsValid ? INCREMENT_ACTION_COUNTER : MINIMUM_VALID_ACTIONS),
      MINIMUM_VALID_ACTIONS,
    );
    return (
      numValidActions === MINIMUM_VALID_ACTIONS &&
      this.children.length > MINIMUM_VALID_ACTIONS
    );
  }

  /// Get the UCB value of a given child.
  private getChildUcb(child: Node<G>): number {
    // Privileges the child with the lowest exploitation, as it means the opponent will have the lowest chance of winning
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const exploitation = 1 - (child.valueSum / child.visitCount + 1) / 2;
    const exploration =
      this.params.explorationConstant *
      Math.sqrt(Math.log(this.visitCount) / child.visitCount);
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

  /// Pick a random action from the list of valid actions.
  private pickRandomAction(): Action {
    const validActions: Action[] = this.expandableActions.reduce<Action[]>(
      (actions, currentIsValid, index) =>
        currentIsValid ? [...actions, index] : actions,
      [],
    );
    const randomIndex = Math.floor(Math.random() * validActions.length);
    const selectedAction = validActions[randomIndex];
    if (typeof selectedAction !== "number")
      throw new Error("No valid actions to pick from!");
    return selectedAction;
  }

  /// Pick a random action and perform it, returning the outcome state as a child node.
  public expand(): Node<G> {
    const initialPlayer = this.game.getInitialPlayer();
    const nextPlayer = this.game.getOpponent(initialPlayer);

    const selectedAction = this.pickRandomAction();
    this.expandableActions[selectedAction] = false;

    // Copy the state and play the action on the copy
    const childState = this.state.clone();
    childState.performAction(selectedAction, initialPlayer);
    childState.changePerspective(initialPlayer, nextPlayer);

    const child = new Node({
      actionTaken: selectedAction,
      game: this.game,
      params: this.params,
      parent: this,
      state: childState,
    });
    this.children.push(child);
    return child;
  }

  /// Simulate a game from the current state, returning the outcome value.
  public simulate(): ActionOutcome["value"] {
    const initialPlayer = this.game.getInitialPlayer();
    const nextPlayer = this.game.getOpponent(initialPlayer);

    let { isTerminal, value } = Game.getActionOutcome(
      this.state,
      this.actionTaken,
    );
    value = this.game.getOpponentValue(value);
    if (isTerminal) return value;

    // Copy the state and play random actions, with alternate players, until the game is over
    const rolloutState = this.state.clone();
    let rolloutPlayer = initialPlayer;
    for (;;) {
      const selectedAction = this.pickRandomAction();
      rolloutState.performAction(selectedAction, rolloutPlayer);
      const actionOutcome = Game.getActionOutcome(rolloutState, selectedAction);
      ({ isTerminal, value } = actionOutcome);
      if (isTerminal) {
        if (rolloutPlayer === nextPlayer)
          value = this.game.getOpponentValue(value);
        return value;
      }
      rolloutPlayer = this.game.getOpponent(rolloutPlayer);
    }
  }

  /// Backpropagate the outcome value to the root node.
  public backpropagate(outcomeValue: ActionOutcome["value"]) {
    this.valueSum += outcomeValue;
    this.visitCount += INCREMENT_ONE;
    const opponentValue = this.game.getOpponentValue(outcomeValue);
    if (this.parent) this.parent.backpropagate(opponentValue);
  }
}
