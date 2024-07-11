// noinspection JSVoidFunctionReturnValueUsed

import { expect, it } from "vitest";
import { Stack } from "./stack";


it("pushes/pop with empty", function () {
  const stack = new Stack<string>();
  expect(stack.push("a")).toBe(undefined);
  expect(stack.peek()).toBe("a");
  expect(stack.pop()).toBe("a");
  expect(stack.isEmpty()).toBe(true);
});

it("pushes/pop with 2 items", function () {
  const stack = new Stack<string>(["a"]);
  expect(stack.push("b")).toBe(undefined);
  expect(stack.peek()).toBe("b");
  expect(stack.pop()).toBe("b");
  expect(stack.isEmpty()).toBe(false);
  expect(stack.peek()).toBe("a");
  expect(stack.pop()).toBe("a");
  expect(stack.isEmpty()).toBe(true);
});

it("errors on empty", function () {
  const stack = new Stack<string>();
  expect(stack.isEmpty()).toBe(true);
  expect(() => stack.pop()).toThrow(Error);
  expect(() => stack.peek()).toThrow(Error);
});
