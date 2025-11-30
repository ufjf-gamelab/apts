import { type Answers, type PromptObject } from "prompts";

type GetInput = (
  questions: PromptObject | PromptObject[],
) => Promise<Answers<string>>;

export type { GetInput };
