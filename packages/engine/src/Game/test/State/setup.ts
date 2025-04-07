import { TestingPlayerKey } from "../Player.js";
import TestingState, { type TestingStateParams } from "../State.js";

const createState = ({
  game,
  slots,
}: {
  game: TestingStateParams["game"];
  slots: TestingStateParams["slots"];
}): TestingState =>
  new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots,
  });

export { createState };
