import { describe, it, expect } from "vitest";
import { UGraphStr, UGraphNodeStr } from "./graph";

describe("addNode", function () {
  it("should add a key in the adjacency", function () {
    // unconnected graph:
    //            A
    //      B          C

    let graph = new UGraphStr();
    let a = new UGraphNodeStr("A");
    let b = new UGraphNodeStr("B");
    let c = new UGraphNodeStr("C");
    graph.addNode(a);
    graph.addNode(b);
    graph.addNode(c);
    expect(graph.nodes.has(a)).toBe(true);
    expect(graph.nodes.has(b)).toBe(true);
    expect(graph.nodes.has(c)).toBe(true);
  });
});

describe("addNodes", function () {
  it("should add multiple keys in the adjacency", function () {
    // unconnected graph:
    //            A
    //      B          C

    let graph = new UGraphStr();
    let a = new UGraphNodeStr("A");
    let b = new UGraphNodeStr("B");
    let c = new UGraphNodeStr("C");
    graph.addNodes([a, b, c]);
    expect(graph.nodes.has(a)).toBe(true);
    expect(graph.nodes.has(b)).toBe(true);
    expect(graph.nodes.has(c)).toBe(true);
  });
});

describe("addEdge", function () {
  it("should add the appropriate edges to the adjacency list", function () {
    //              A
    //            /   \
    //           B --- C

    let graph = new UGraphStr();
    let a = new UGraphNodeStr("A");
    let b = new UGraphNodeStr("B");
    let c = new UGraphNodeStr("C");
    graph.addNodes([a, b, c]);
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, c);
    expect(a.adjacent).toContain(b);
    expect(a.adjacent).toContain(c);
    expect(b.adjacent).toContain(c);
    // check reverse:
    expect(c.adjacent).toContain(a);
    expect(c.adjacent).toContain(b);
    expect(b.adjacent).toContain(a);
  });
});

describe("addEdges", function () {
  it("should add the appropriate edges to the adjacency list", function () {
    //              A
    //            /   \
    //           B --- C

    let graph = new UGraphStr();
    let a = new UGraphNodeStr("A");
    let b = new UGraphNodeStr("B");
    let c = new UGraphNodeStr("C");
    graph.addNodes([a, b, c]);
    graph.addEdges([[a, b], [a, c], [b, c]]);
    expect(a.adjacent).toContain(b);
    expect(a.adjacent).toContain(c);
    expect(b.adjacent).toContain(c);
    // check reverse:
    expect(c.adjacent).toContain(a);
    expect(c.adjacent).toContain(b);
    expect(b.adjacent).toContain(a);
  });
});

describe("removeEdge", function () {
  it("should remove the nodes from the adjacency list", function () {
    //              A
    //            /   \
    //          B       C
    //            \   /
    //              D

    let graph = new UGraphStr();
    let a = new UGraphNodeStr("A");
    let b = new UGraphNodeStr("B");
    let c = new UGraphNodeStr("C");
    let d = new UGraphNodeStr("D");
    graph.addNodes([a, b, c, d]);
    graph.addEdges([[a, b], [a,c], [b,d], [c,d]]);

    graph.removeEdge(b, a);
    graph.removeEdge(c, d);

    expect(a.adjacent).not.toContain(b);
    expect(b.adjacent).not.toContain(a);
    expect(c.adjacent).not.toContain(d);
    expect(d.adjacent).not.toContain(c);
  });
});

describe("removeNode", function () {
  it("should remove the node as well as any edges", function () {
    //              A
    //            /   \
    //          B       C
    //            \   /
    //              D

    let graph = new UGraphStr();
    let a = new UGraphNodeStr("A");
    let b = new UGraphNodeStr("B");
    let c = new UGraphNodeStr("C");
    let d = new UGraphNodeStr("D");
    graph.addNodes([a, b, c, d]);
    graph.addEdges([[a, b], [a,c], [b,d], [c,d]]);

    graph.removeNode(c);
    expect(graph.nodes.has(a)).toBeTruthy();
    expect(graph.nodes.has(b)).toBeTruthy();
    expect(graph.nodes.has(c)).toBeFalsy();
    expect(graph.nodes.has(d)).toBeTruthy();

    // check edges were deleted:
    expect(a.adjacent).not.toContain(c)
    expect(c.adjacent).not.toContain(a)
    expect(d.adjacent).not.toContain(c)
    expect(c.adjacent).not.toContain(d)
  });
});
