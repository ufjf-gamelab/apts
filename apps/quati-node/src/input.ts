import type { GetInput } from "@repo/interface/input.js";

import prompts from "prompts";

const getInput: GetInput = async questions => await prompts(questions);

export { getInput };
