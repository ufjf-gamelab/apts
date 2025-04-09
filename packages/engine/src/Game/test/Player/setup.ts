import TestingPlayer from "../Player.js";

enum IndexOfTestingPlayer {
  One,
  Two,
}

type NameOfIndexOfTestingPlayer = keyof typeof IndexOfTestingPlayer;

const playersDTOs = {
  [IndexOfTestingPlayer.One]: {
    name: "Alice",
    symbol: "X",
  },
  [IndexOfTestingPlayer.Two]: {
    name: "Bruno",
    symbol: "O",
  },
} as const;

type PlayerDTO = (typeof playersDTOs)[IndexOfTestingPlayer];

interface RecordOfPlayerDTO {
  data: PlayerDTO;
  index: IndexOfTestingPlayer;
}

const listOfPlayersDTOs = [
  playersDTOs[IndexOfTestingPlayer.One],
  playersDTOs[IndexOfTestingPlayer.Two],
] as const;

interface CreatedPlayerAndRelatedData {
  dataRelatedToCreatedPlayer: DataRelatedToCreatedPlayer;
  player: TestingPlayer;
}

interface DataRelatedToCreatedPlayer {
  index: IndexOfTestingPlayer;
  name: TestingPlayer["name"];
  nameOfIndex: NameOfIndexOfTestingPlayer;
  symbol: TestingPlayer["symbol"];
}

const createPlayer = ({
  recordOfPlayerDTO,
}: {
  recordOfPlayerDTO: RecordOfPlayerDTO;
}): CreatedPlayerAndRelatedData => {
  const {
    data: { name, symbol },
    index: indexOfPlayerDTO,
  } = recordOfPlayerDTO;

  const player = new TestingPlayer({
    name,
    symbol,
  });

  return {
    dataRelatedToCreatedPlayer: {
      index: indexOfPlayerDTO,
      name,
      nameOfIndex: IndexOfTestingPlayer[
        indexOfPlayerDTO
      ] as NameOfIndexOfTestingPlayer,
      symbol,
    },
    player,
  };
};

type CreatedPlayersAndRelatedData = ReadonlyMap<
  IndexOfTestingPlayer,
  CreatedPlayerAndRelatedData
>;

const createPlayers = (): CreatedPlayersAndRelatedData => {
  const players = listOfPlayersDTOs.map((playerDTO, index) =>
    createPlayer({
      recordOfPlayerDTO: {
        data: playerDTO,
        index,
      },
    }),
  );

  return new Map(
    players.map(
      ({ dataRelatedToCreatedPlayer, player }: CreatedPlayerAndRelatedData) => [
        dataRelatedToCreatedPlayer.index,
        {
          dataRelatedToCreatedPlayer,
          player,
        },
      ],
    ),
  );
};

interface TestPlayerParams {
  player: TestingPlayer;
  testDescriptor: string;
}

export type {
  CreatedPlayerAndRelatedData,
  CreatedPlayersAndRelatedData,
  TestPlayerParams,
};
export { createPlayers };
