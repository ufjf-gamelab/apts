import type { Linter } from "eslint";

import { config as baseConfig } from "@repo/eslint_config/node";

export default [...baseConfig(import.meta.dirname)] as Linter.Config[];
