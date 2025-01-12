import { sayHello as engineSayHello } from "@repo/engine/index";

const sayHello = (): void => {
  console.log(engineSayHello());
};

export default sayHello;
