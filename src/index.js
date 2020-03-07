import { sayHello } from "./sayHello";

global.myFunction = sayHello;

global.otherFunction = () => {
  Logger.log("Other function");
};
