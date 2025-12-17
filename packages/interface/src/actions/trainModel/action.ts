import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";
import type { TreeNode } from "@repo/search/MonteCarloTree/TreeNode.js";
import type { ResidualNeuralNetwork } from "@repo/search/ResidualNeuralNetwork/ResidualNeuralNetwork.js";

import { train } from "@repo/search/ResidualNeuralNetwork/training.js";

const trainModel = async <
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
  path,
  processLogs,
  processMessage,
  quantityOfEpochs,
  residualNeuralNetwork,
  scheme,
  sizeOfBatch,
  trainingMemory,
}: Pick<
  Parameters<
    ResidualNeuralNetwork<
      GenericGame,
      GenericMove,
      GenericPlayer,
      GenericScore,
      GenericSlot,
      GenericState
    >["save"]
  >[0],
  "path" | "scheme"
> &
  Pick<
    Parameters<typeof train>[0],
    | "processMessage"
    | "quantityOfEpochs"
    | "residualNeuralNetwork"
    | "sizeOfBatch"
    | "trainingMemory"
  > & {
    processLogs: (logs: Record<string, number>[]) => void;
  }) => {
  const logs = await train({
    processMessage,
    quantityOfEpochs,
    residualNeuralNetwork,
    sizeOfBatch,
    trainingMemory,
  });
  processLogs(logs);

  residualNeuralNetwork.summary({ processMessage });
  await residualNeuralNetwork.save({ path, scheme });
};

export { trainModel };
