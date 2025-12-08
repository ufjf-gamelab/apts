const modesOfPlay = {
  computerVersusComputer: "cvc",
  playerVersusComputer: "pvc",
  playerVersusPlayer: "pvp",
} as const;
type ModeOfPlay = (typeof modesOfPlay)[keyof typeof modesOfPlay];

const strategiesToSearch = {
  common: "common",
  expandAll: "expandAll",
} as const;
type StrategyToSearch =
  (typeof strategiesToSearch)[keyof typeof strategiesToSearch];

export type { ModeOfPlay, StrategyToSearch };
export { modesOfPlay, strategiesToSearch };
