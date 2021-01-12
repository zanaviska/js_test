const { inc } = require("./a.js");

test("passing test", () => {
  expect(inc(5)).toBe(6);
});
