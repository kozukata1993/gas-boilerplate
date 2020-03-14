import { runSample } from "./chunk";

describe("chunk test", () => {
  test("should be [[a, b], [c, d], e]", () => {
    expect(runSample()).toStrictEqual([["a", "b"], ["c", "d"], ["e"]]);
  });
});
