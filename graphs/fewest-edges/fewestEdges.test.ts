import { describe, expect, it } from "vitest";
import { UGraphStr } from "../common/graph";
import { fewestEdges } from "./fewestEdges";

describe("fewestEdges", function () {
  it("should return num of fewest edges from start to end node", function () {
    //            R
    //         /  |  \
    //        I - T - H
    //                |
    //                M   X

    const graph = new UGraphStr();
    const [r, i, t, h, m, x] = graph.addFromVals(
        ["r", "i", "t", "h", "m", "x"]);
    graph.addEdges([[r, i], [i, t], [t, h], [r, t], [r, h], [h, m]]);
    expect(fewestEdges(r, r)).toBe(0);
    expect(fewestEdges(r, i)).toBe(1);
    expect(fewestEdges(r, t)).toBe(1);
    expect(fewestEdges(r, h)).toBe(1);
    expect(fewestEdges(r, m)).toBe(2);
    expect(fewestEdges(i, m)).toBe(3);
    expect(fewestEdges(r, x)).toBe(Infinity);
  });
});
