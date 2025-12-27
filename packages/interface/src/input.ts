interface Choice<Value> {
  description?: string;
  name: string;
  value: Value;
}

type Select<Value> = (config: {
  choices: readonly Choice<Value>[];
  message: string;
}) => Promise<Value>;

export type { Choice, Select };
