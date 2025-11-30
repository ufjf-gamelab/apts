import prompts, { type Answers, type PromptObject } from "prompts";

type GetInput = (
  questions: PromptObject | PromptObject[],
) => Promise<Answers<string>>;

const getInput: GetInput = async questions => await prompts(questions);

export type { GetInput };
export { getInput };
