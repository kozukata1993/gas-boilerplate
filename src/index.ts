import { sayHello } from "./sayHello";

declare let global: any;

global.myFunction = sayHello("TypeScript");
global.otherFunction = (): void => {
  Logger.log("Other function");
};
