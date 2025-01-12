import { Command } from "commander";
import actions from "../../../../actions/actions";

const action = (): void => {
  actions.sayHello();
};

const commandToSayHello = {
  command: new Command("hello").description("Say hello.").action(action),
};

export default commandToSayHello;
