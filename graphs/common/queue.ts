import { LL } from "./ll";

/** QueueStr: can remove from start or add to end */
class Queue<T> {
  _lst: LL<T>;

  constructor(initial: T[] = []) {
    this._lst = new LL(initial);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: T): void {
    return this._lst.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): T {
    return this._lst.shift();
  }

  /** peek(): return the value of top. */
  peek(): T {
    return this._lst.head!.val;
  }

  /** isEmpty(): is queue empty? */
  isEmpty(): boolean {
    return this._lst.length === 0;
  }

  /** toArray: useful for debugging. */
  toArray() : T[] {
    return this._lst.toArray();
  }
}

class QueueStr extends Queue<string> {
}

class QueueNum extends Queue<number> {
}

export { Queue, QueueStr, QueueNum };
