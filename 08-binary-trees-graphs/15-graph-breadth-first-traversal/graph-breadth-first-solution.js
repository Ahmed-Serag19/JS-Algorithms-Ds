<<<<<<< HEAD
const Queue = require('./queue');

function breadthFirstTraversal(graph, startingVertex) {
  // If the starting vertex is not in the graph, return an empty array.
  const visited = new Set();
  // Create an empty array to store the result.
  const result = [];
  // Create an empty queue and add the starting vertex to it.
  const queue = new Queue();

  // Add the starting vertex to the queue.
  queue.enqueue(startingVertex);
  // Mark it as visited.
  visited.add(startingVertex);

  // While the queue is not empty:
  while (!queue.isEmpty()) {
    // Remove a vertex from the queue.
    const currentVertex = queue.dequeue();
    // Add the vertex to the result.
    result.push(currentVertex);

    // For each neighbor of the vertex:
    for (const neighbor of graph.adjacencyList[currentVertex]) {
      // If the neighbor has not been visited:
      if (!visited.has(neighbor)) {
        // Add it to the queue.
        queue.enqueue(neighbor);
        // Mark it as visited.
        visited.add(neighbor);
      }
    }
  }

  // Return the result.
  return result;
}

module.exports = breadthFirstTraversal;
=======
const Queue = require('./queue');

function breadthFirstTraversal(graph, startingVertex) {
  // If the starting vertex is not in the graph, return an empty array.
  const visited = new Set();
  // Create an empty array to store the result.
  const result = [];
  // Create an empty queue and add the starting vertex to it.
  const queue = new Queue();

  // Add the starting vertex to the queue.
  queue.enqueue(startingVertex);
  // Mark it as visited.
  visited.add(startingVertex);

  // While the queue is not empty:
  while (!queue.isEmpty()) {
    // Remove a vertex from the queue.
    const currentVertex = queue.dequeue();
    // Add the vertex to the result.
    result.push(currentVertex);

    // For each neighbor of the vertex:
    for (const neighbor of graph.adjacencyList[currentVertex]) {
      // If the neighbor has not been visited:
      if (!visited.has(neighbor)) {
        // Add it to the queue.
        queue.enqueue(neighbor);
        // Mark it as visited.
        visited.add(neighbor);
      }
    }
  }

  // Return the result.
  return result;
}

module.exports = breadthFirstTraversal;
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
