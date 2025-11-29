import type { Integer } from "@repo/engine_core/types.js";

import type { IndexOfMove, Move } from "./Move.js";
import type { IndexOfPlayer, Player } from "./Player.js";
import type { Score } from "./Score.js";
import type { Slot } from "./Slot.js";
import type { State } from "./State.js";

type IndexOfGame = Integer;

interface ParamsOfGame<
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericSlot extends Slot<GenericSlot>,
> {
  readonly moves: readonly GenericMove[];
  readonly name: string;
  readonly players: readonly GenericPlayer[];
  readonly slots: readonly GenericSlot[];
}

abstract class Game<
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
> {
  private readonly moves: ParamsOfGame<
    GenericMove,
    GenericPlayer,
    GenericSlot
  >["moves"];
  private readonly name: ParamsOfGame<
    GenericMove,
    GenericPlayer,
    GenericSlot
  >["name"];
  private readonly players: ParamsOfGame<
    GenericMove,
    GenericPlayer,
    GenericSlot
  >["players"];
  private readonly slots: ParamsOfGame<
    GenericMove,
    GenericPlayer,
    GenericSlot
  >["slots"];

  public constructor({
    moves,
    name,
    players,
    slots,
  }: ParamsOfGame<GenericMove, GenericPlayer, GenericSlot>) {
    this.moves = moves.map((move) => move.clone());
    this.name = name;
    this.players = players.map((player) => player.clone());
    this.slots = slots.map((slot) => slot.clone());
  }

  public abstract clone(): GenericGame;

  public abstract constructInitialState(): GenericState;

  public abstract getIndexesOfValidMoves({
    state,
  }: {
    state: GenericState;
  }): ReadonlySet<IndexOfMove>;

  public abstract getIndexOfNextPlayer({
    state,
  }: {
    state: GenericState;
  }): IndexOfPlayer;

  public getMove({
    indexOfMove,
  }: {
    indexOfMove: IndexOfMove;
  }): (typeof this.moves)[number] | null {
    const move = this.moves[indexOfMove];
    if (typeof move === "undefined") {
      return null;
    }
    return move.clone();
  }

  public getMoves() {
    return this.moves.map((move) => move.clone());
  }

  public getName() {
    return this.name;
  }

  public getPlayer({
    indexOfPlayer,
  }: {
    indexOfPlayer: IndexOfPlayer;
  }): (typeof this.players)[number] | null {
    const player = this.players[indexOfPlayer];
    if (typeof player === "undefined") {
      return null;
    }
    return player.clone();
  }
  public getPlayers() {
    return this.players.map((player) => player.clone());
  }

  public getQuantityOfMoves() {
    return this.moves.length;
  }

  public getQuantityOfPlayers() {
    return this.players.length;
  }

  public getQuantityOfSlots() {
    return this.slots.length;
  }

  public abstract isFinal({ state }: { state: GenericState }): boolean;

  public abstract play({
    indexOfMove,
    state,
  }: {
    indexOfMove: IndexOfMove;
    state: GenericState;
  }): GenericState;

  protected getSlots() {
    return this.slots.map((slot) => slot.clone());
  }
}

const constructErrorForFinalState = ({
  indexOfMove,
}: {
  indexOfMove: IndexOfMove;
}) =>
  new Error(
    `Cannot play move ${indexOfMove} because this state is already final.`,
  );

const constructErrorForInvalidMove = ({
  indexOfMove,
}: {
  indexOfMove: IndexOfMove;
}) => new Error(`Cannot play move ${indexOfMove} because it is not valid.`);

export type { IndexOfGame, ParamsOfGame };
export { constructErrorForFinalState, constructErrorForInvalidMove, Game };
