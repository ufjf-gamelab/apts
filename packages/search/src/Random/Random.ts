import type { IndexOfMove, Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { type Game } from "@repo/game/Game.js";
import seedrandom from "seedrandom";

import type { TreeNode } from "../MonteCarloTree/TreeNode.js";

import { calculateProbabilityOfPlayingEachMove } from "../quality.js";

interface ParamsOfRandom {
  seed: string;
}

class Random {
  private readonly generateRandomNumber;
  // private readonly seed: ParamsOfRandom["seed"];

  public constructor({ seed }: ParamsOfRandom) {
    // this.seed = seed;
    this.generateRandomNumber = seedrandom(seed);
  }

  public pickIndexOfRandomNotExpandedChildNode<
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
  >({ treeNode }: { treeNode: GenericTreeNode }): IndexOfMove {
    const indexesOfNotExpandedMoves = Array.from(
      treeNode.getIndexesOfNotExpandedChildrenNodes(),
    );

    const randomIndex = Math.floor(
      this.generateRandomNumber() * indexesOfNotExpandedMoves.length,
    );
    const indexOfMove = indexesOfNotExpandedMoves[randomIndex];
    if (typeof indexOfMove === "undefined") {
      throw new Error("There is no index of not expanded moves to pick from.");
    }

    return indexOfMove;
  }
  public pickIndexOfRandomValidMove<
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
  >({ state }: { state: GenericState }): IndexOfMove {
    const game = state.getGame();
    const indexesOfValidMoves = game
      .getIndexesOfValidMoves({
        state,
      })
      .values()
      .toArray();

    const randomIndex = Math.floor(
      this.generateRandomNumber() * indexesOfValidMoves.length,
    );
    const indexOfMove = indexesOfValidMoves[randomIndex];
    if (typeof indexOfMove === "undefined") {
      throw new Error("There is no index of valid moves to pick from.");
    }

    return indexOfMove;
  }

  public pickIndexOfValidMoveConsideringTheirQuality({
    indexesOfValidMoves,
    qualitiesOfMoves,
    softeningCoefficient,
  }: Pick<
    Parameters<typeof calculateProbabilityOfPlayingEachMove>[0],
    "indexesOfValidMoves" | "qualitiesOfMoves" | "softeningCoefficient"
  >): IndexOfMove {
    const probabilityOfPlayingEachMove = calculateProbabilityOfPlayingEachMove({
      indexesOfValidMoves,
      qualitiesOfMoves,
      softeningCoefficient,
    });

    const sortedProbabilities = probabilityOfPlayingEachMove
      .entries()
      .toArray()
      .sort(
        ([, firstProbability], [, secondProbability]) =>
          secondProbability - firstProbability,
      );

    // Select index based on probability distribution
    const randomNumber = this.generateRandomNumber();
    let accumulator = 0;
    for (const [indexOfValidMove, probability] of sortedProbabilities) {
      accumulator += probability;
      if (randomNumber <= accumulator) {
        return indexOfValidMove;
      }
    }

    throw new Error(
      "Could not retrieve any index of a move considering the informed qualities.",
    );
  }
}

export type { ParamsOfRandom };
export { Random };
