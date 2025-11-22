import type { SnowballPlayerWithData } from "../Player.test/setup.js";

const NOT_FOUND_INDEX = -1;

// TODO: maybe remove this
const getIndexOfPlayer = ({
  indexedPlayers,
  keyOfPlayer,
}: {
  indexedPlayers: SnowballPlayerWithData[];
  keyOfPlayer: string;
}) => {
  const indexOfPlayer = indexedPlayers.findIndex(
    (player) => player.keyOfPlayer === keyOfPlayer,
  );
  if (indexOfPlayer === NOT_FOUND_INDEX) {
    throw new Error(`There is no player with the key ${keyOfPlayer}.`);
  }
  return indexOfPlayer;
};

export { getIndexOfPlayer };
