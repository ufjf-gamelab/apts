import type { Answers, Choice, PromptObject } from "prompts";

type GetInput = (
  questions: PromptObject | PromptObject[],
) => Promise<Answers<string>>;

export type { Choice, GetInput };
