import { type Answers, type PromptObject } from "prompts";

type GetInput = (
  questions: PromptObject | PromptObject[],
) => Promise<Answers<string>>;

type ProcessMessage = (message: string) => void;

export type { GetInput, ProcessMessage };
