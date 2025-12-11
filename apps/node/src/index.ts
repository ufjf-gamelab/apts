import dotenv from "dotenv";

import { program } from "./interface/program.js";

console.info(process.argv);
dotenv.config();
program.parse();
