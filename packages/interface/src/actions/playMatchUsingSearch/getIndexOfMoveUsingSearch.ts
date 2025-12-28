import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { AgentGuidedSearch } from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type { CommonSearch } from "@repo/search/CommonMonteCarloTree/CommonSearch.js";
import type { ExpandAllSearch } from "@repo/search/ExpandAllMonteCarloTree/ExpandAllSearch.js";
import type { Random } from "@repo/search/Random/Random.js";
import type { ProcessMessage } from "@repo/search/types.js";

import { searchQualityOfMoves } from "@repo/search/qualityOfMove.js";

const getIndexOfMoveUsingSearch = <
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
>({
  indexesOfValidMoves,
  processMessage,
  random,
  search,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<Random["pickIndexOfValidMoveConsideringItsQuality"]>[0],
  "softeningCoefficient"
> & {
  indexesOfValidMoves: ReadonlySet<IndexOfMove>;
  processMessage: ProcessMessage;
  random: Random;
  search:
    | AgentGuidedSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    | CommonSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >
    | ExpandAllSearch<
        GenericGame,
        GenericMove,
        GenericPlayer,
        GenericScore,
        GenericSlot,
        GenericState
      >;
  state: GenericState;
}) => {
  const game = state.getGame();

  const qualitiesOfMoves = searchQualityOfMoves({
    search,
    state,
  });

  const indexOfPickedMove = random.pickIndexOfValidMoveConsideringItsQuality({
    indexesOfValidMoves,
    qualitiesOfMoves,
    softeningCoefficient,
  });
  const pickedMove = game.getMove({ indexOfMove: indexOfPickedMove });

  processMessage(
    `Played move: ${pickedMove?.getTitle()}. ${pickedMove?.getDescription()}`,
  );
  return indexOfPickedMove;
};

export { getIndexOfMoveUsingSearch };
