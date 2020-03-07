import { sayHello } from "./sayHello";

declare const global: any;

global.myFunction = sayHello("TypeScript");
global.otherFunction = (): void => {
  Logger.log("Other function");
};
