import type Player from "../../Player.js";

const clone = (player: Player): Player => player;

const createPlayer = ({
  name,
  symbol,
}: {
  name: Player["name"];
  symbol: Player["symbol"];
}): Player => ({
  clone(): typeof this {
    return clone(this);
  },
  name,
  symbol,
});

export { createPlayer };
