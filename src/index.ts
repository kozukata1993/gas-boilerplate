import { say } from "./say";
import { runSample } from "./chunk";

global.myFunction = () => {
  say("Name is changed.");
};

global.otherFunction = (): void => {
  Logger.log("Other function");
};

global.testLodash = (): void => {
  runSample();
};
