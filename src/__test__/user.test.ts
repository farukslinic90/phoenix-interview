import { test, expect, describe } from "@jest/globals";
// const sum = (a: number, b: number) => a + b;

// describe("sum moduel", () => {
//   test("adds 1 + 2 to equal 3", () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
