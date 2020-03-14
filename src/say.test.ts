import { say } from "./say";

describe("say test", () => {
  test("say(hello) should be hello", () => {
    expect(say("hello")).toBe("hello");
  });
});
