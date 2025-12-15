import dotenv from "dotenv";

import { program } from "./interface/program.js";

dotenv.config();

const sanitizedArgv = process.argv.filter(argument => argument !== "--");
program.parse(sanitizedArgv);
