import type { Game } from "@repo/game/Game.js";
import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { ParamsOfAgentGuidedSearch } from "@repo/search/AgentGuidedMonteCarloTree/AgentGuidedSearch.js";
import type {
  QualityOfMatch,
  TreeNode,
} from "@repo/search/MonteCarloTree/TreeNode.js";
import type { ProcessMessage } from "@repo/search/types.js";

import {
  calculateProbabilityOfPlayingEachMove,
  type QualityOfMove,
} from "@repo/search/qualityOfMove.js";

const predictQualityOfMoves = <
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  predictionModel,
  processMessage,
  processProbabilityPlayingEachMove,
  processQualityOfEachMove,
  processQualityOfMatch,
  softeningCoefficient,
  state,
}: Pick<
  Parameters<
    Game<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >["getIndexesOfValidMoves"]
  >[0],
  "state"
> &
  Pick<
    Parameters<typeof calculateProbabilityOfPlayingEachMove>[0],
    "softeningCoefficient"
  > &
  Pick<
    ParamsOfAgentGuidedSearch<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >,
    "predictionModel"
  > & {
    processMessage: ProcessMessage;
    processProbabilityPlayingEachMove:
      | ((
          probabilityOfPlayingEachMove: ReadonlyMap<IndexOfMove, number>,
        ) => void)
      | null;
    processQualityOfEachMove: (
      qualityOfEachMove: ReadonlyMap<IndexOfMove, QualityOfMove>,
    ) => void;
    processQualityOfMatch: (qualityOfMatch: QualityOfMatch) => void;
  }): void => {
  const game = state.getGame();

  const { qualitiesOfMoves, qualityOfMatch } = predictionModel.predict({
    state,
  });

  const qualityOfEachMove = new Map(
    qualitiesOfMoves.map((qualityOfMove, indexOfMove) => [
      indexOfMove,
      qualityOfMove,
    ]),
  );

  const probabilityOfPlayingEachMove = calculateProbabilityOfPlayingEachMove({
    indexesOfValidMoves: game.getIndexesOfValidMoves({ state }),
    qualitiesOfMoves,
    softeningCoefficient,
  });

  processMessage("Quality of each move:");
  processMessage(qualityOfEachMove);
  processQualityOfEachMove(qualityOfEachMove);

  if (processProbabilityPlayingEachMove !== null) {
    processMessage("\nProbability of playing each move:");
    processMessage(probabilityOfPlayingEachMove);
    processProbabilityPlayingEachMove(probabilityOfPlayingEachMove);
  }

  processMessage("\nQuality of match:", qualityOfMatch);
  processQualityOfMatch(qualityOfMatch);
};

export { predictQualityOfMoves };
