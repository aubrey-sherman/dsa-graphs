/** Graph Node class. */

class UGraphNode<T> {
  value: T;
  adjacent: Set<UGraphNode<T>>;

  constructor(val: T, adjacent = new Set<UGraphNode<T>>()) {
    this.value = val;
    this.adjacent = adjacent;
  }
}

/** Undirected graph. */

class UGraph<T> {
  nodes: Set<UGraphNode<T>>;

  constructor() {
    this.nodes = new Set();
  }

  addFromVals(vals: T[]): UGraphNode<T>[] {
    const newNodes = vals.map(val => new UGraphNode<T>(val));
    for (const n of newNodes) {
      this.nodes.add(n);
    }
    return newNodes;
  }

  /** Add node to graph. */
  addNode(node: UGraphNode<T>): void {
    this.nodes.add(node);
  }

  /** Add array of nodes to graph. */
  addNodes(nodeArray: UGraphNode<T>[]): void {
    // Add an array of nodes to our graph

    for (const node of nodeArray) {
      this.addNode(node);
    }
  }

  /** Add edge between v1 and v2. */
  addEdge(v1: UGraphNode<T>, v2: UGraphNode<T>): void {
    // Connect two nodes
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** Add edges. */
  addEdges(edges: [UGraphNode<T>, UGraphNode<T>][]): void {
    for (const [v1, v2] of edges) this.addEdge(v1, v2);
  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: UGraphNode<T>, v2: UGraphNode<T>): void {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** Remove node from graph. */
  removeNode(node: UGraphNode<T>): void {
    for (const adj of this.nodes) {
      if (adj.adjacent.has(node)) adj.adjacent.delete(node);
    }
    node.adjacent.clear();
    this.nodes.delete(node);
  }
}

class UGraphNodeStr extends UGraphNode<string> {}

class UGraphStr extends UGraph<string> {}

class UGraphNodeNum extends UGraphNode<string> {}

class UGraphNum extends UGraph<string> {}

export { UGraphNode, UGraph, UGraphNodeStr, UGraphStr, UGraphNodeNum, UGraphNum };