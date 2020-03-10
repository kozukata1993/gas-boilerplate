import _ from "lodash";

export const runSample = () => {
  Logger.log(_.chunk(["a", "b", "c", "d", "e"], 2));
};
