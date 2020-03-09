import { say } from "./say";

global.myFunction = () => {
  say("Welcome Jest!");
};

global.otherFunction = (): void => {
  Logger.log("Other function");
};
