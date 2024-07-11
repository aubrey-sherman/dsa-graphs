import { UGraphNodeStr } from "../graph/graph";


/*
For each call of rDfs, result is the SAME reference as the original.
As we push to it per call, it is adding to the most outer function call's
reference. This works because each call has variable block scope.

     d -- b -- a -- c
      \------------/
1(a) result: [] visited: [a]    - adjacents: [b, c]
  2(b) result: [a] visited: [a, b]  - adjacents: [d, a]
    3(d) result: [a, b] visited: [a, b, d]  - adjacents: [b, c]
     4(c) result: [a, b, d] visited: [a, b, d, c]  - adjacents: [a, d]

    final product-> [a, b, d, c]

*/

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: UGraphNodeStr,
  result: UGraphNodeStr[] = [],
  visited = new Set([start])): UGraphNodeStr[] {

  result.push(start);

  for (const adj of start.adjacent) {
    if (!visited.has(adj)) {
      visited.add(adj);
      rDfs(adj, result, visited);
    }
  }

  return result;
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): UGraphNodeStr[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): UGraphNodeStr[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };