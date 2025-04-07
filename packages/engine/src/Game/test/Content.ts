import Content from "../Content.js";
import type TestingGame from "./Game.js";
import type TestingMove from "./Move.js";
import type TestingPlayer from "./Player.js";
import type TestingState from "./State.js";

class TestingContent extends Content<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {}

export default TestingContent;
