import { UGraphNodeStr } from "../graph/graph";
import { Queue } from "../common/queue";


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

  // initialize a set for visited and put the starting node in it
  const toVisit = [start];
  const visited = new Set();

  // initialize an array to return
  const result: UGraphNodeStr[] = [];

  // as long as we have a node in our stack
  while (!(toVisit.length === 0)) {
    const currNode = toVisit.pop()!;
    // check whether the current node has been visited, and if NOT--
    if (!visited.has(currNode)) {
      result.push(currNode);
      visited.add(currNode);
      toVisit.push(...currNode.adjacent);
    }
  }

  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): UGraphNodeStr[] {

  const toVisit = new Queue([start]);
  const visited = new Set();

  const result: UGraphNodeStr[] = [];

  while (!(toVisit.isEmpty())) {
    const currNode = toVisit.dequeue();

    if (!visited.has(currNode)) {
      // add to result
      result.push(currNode);
      // add to visited
      visited.add(currNode);
      // add its adjacent nodes to the queue
      for (const adj of currNode.adjacent) {
        toVisit.enqueue(adj) ;
      }
    }
  }

  return result;
}


export { iDfs, rDfs, bfs };