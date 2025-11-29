import { actions } from "@repo/interface/actions/actions.js";
import { Command } from "commander";

const action = (): void => {
  actions.sayHello(console.log);
};

const commandToSayHello = {
  command: new Command("hello").description("Say hello.").action(action),
};

export default commandToSayHello;
