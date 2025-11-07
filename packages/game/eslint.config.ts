import type { Linter } from "eslint";

import { config as baseConfig } from "@repo/eslint_config/base.js";

export default [...baseConfig] as Linter.Config[];
