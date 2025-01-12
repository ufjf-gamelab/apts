import { sayHello as engineSayHello } from "@repo/engine";

const sayHello = (): void => {
  console.log(engineSayHello());
};

export default sayHello;
