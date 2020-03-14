import _ from "lodash";

export const runSample = (): string[] => {
  return _.chunk(["a", "b", "c", "d", "e"], 2);
};
