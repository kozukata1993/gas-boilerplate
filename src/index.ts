import { sayHello } from "./sayHello";

global.myFunction = sayHello("ESLint");
global.otherFunction = (): void => {
  Logger.log("Other function");
};
