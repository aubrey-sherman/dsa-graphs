import { describe, expect, it } from "vitest";
import { UGraphStr } from "../common/graph";
import { bfs, iDfs, rDfs } from "./search";

describe("DFS", function () {
  it.each([
    ["iDFS", iDfs],
    ["rDFS", rDfs],
  ])("DFS does a-b-d-c or a-c-d-b (%s)", function (name, fn) {
    //    d -- b -- a -- c
    //     \------------/
    const graph = new UGraphStr();
    const [a, b, c, d] = graph.addFromVals(["a", "b", "c", "d"]);
    graph.addEdges([[d, b], [b, a], [a, c], [c, d]]);
    const rez = rDfs(a).map(node => node.value).join("-");
    expect(["a-b-d-c", "a-c-d-b"]).toContain(rez);
  });
});

describe("BFS", function () {
  it("returns array of nodes using bfs", function () {
    //    d -- b -- a -- c
    //     \------------/

    const graph = new UGraphStr();
    const [a, b, c, d] = graph.addFromVals(["a", "b", "c", "d"]);
    graph.addEdges([[d, b], [b, a], [a, c], [c, d]]);
    const rez = bfs(a).map(node => node.value).join("-");
    expect([ "a-b-c-d", "a-c-b-d" ]).toContain(rez);
  });
});
