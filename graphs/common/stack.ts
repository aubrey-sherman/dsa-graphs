import { IndexError } from "./ll";

/** StackStr: can remove from the top or add to the top. */
class Stack<T> {
  _lst: T[];

  constructor(initial: T[] = []) {
    this._lst = initial;
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: T): void {
    this._lst.push(val);
  }

  /** pop(): remove and return item from top.
   * Throws error if empty. */
  pop(): T {
    if (this._lst.length === 0) throw new IndexError();
    return this._lst.pop()!;
  }

  /** peek(): return the value of first item. */
  peek(): T {
    if (this._lst.length === 0) throw new IndexError();
    return this._lst[this._lst.length - 1];
  }

  /** peek(): return the value of top. */
  isEmpty(): boolean {
    return this._lst.length === 0;
  }

  /** toArray: useful for debugging. */
  toArray() : T[] {
    return this._lst;
  }
}

class StackStr extends Stack<string> {
}

class StackNum extends Stack<number> {
}

export { Stack, StackStr, StackNum };
