interface Move {
  clone(): this;
  readonly description: MoveParams["description"];
  readonly title: MoveParams["title"];
}

interface MoveParams {
  readonly description: string;
  readonly title: string;
}

const createMove = ({
  description,
  title,
}: {
  description: Move["description"];
  title: Move["title"];
}): Move => ({
  clone(): typeof this {
    return createMove({
      description: this.description,
      title: this.title,
    });
  },
  description,
  title,
});

export type { Move as default, MoveParams };
export { createMove };
