const modesOfPlay = {
  computerVersusComputer: "cvc",
  playerVersusComputer: "pvc",
  playerVersusPlayer: "pvp",
} as const;

type ModeOfPlay = (typeof modesOfPlay)[keyof typeof modesOfPlay];

export type { ModeOfPlay };
export { modesOfPlay };
