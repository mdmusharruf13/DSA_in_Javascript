/**
 * Graph:
 * A graph is a non-linear DS that consists of a finite number of vertices(also called nodes) connected by edges.
 * Trees are a specific type of graph DS.
 * 
 * types:
 * 1. Directed: 
 *  A graph in which the edges have direction.
 *  Edges are usually rep by arrows pointing in the direction the graph can be travelled.
 * 
 * 2. Undirected Graph
 *  A graph in which the edges are bidirectional.
 *  The graph can be traversed in either direction.
 *  The absence of an arrow tells us that the graph is undirected.
 * 
 * Graph Usage:
 * 1. Google maps
 * 2. Social media sites
 * 
 * 
 * Graph Representation:
 * 1.Adjacency Matrix
 *  An adjacency matrix is a 2D array if size VxV where V is the number of vertices in the graph.
 *  Each row and column represent a vertex.
 *  If the value of any element say, matrix[i][j] is 1, it represent that there is an edge connecting the vertex i and vertex j.
 * const matrix = {
 *      [0, 1, 0],
 *      [1, 0, 1],
 *      [0, 1, 0]
 * }
 * 
 * 
 * 2.Adjacency List
 *  Vertices are stored in a map like DS, and every vertex stores a list of its adjacent vertices.
 * A -> B
 * B -> A,C
 * C -> B
 * 
 * const adjacencyList = {
 *      'A': ['B'],
 *      'B': ['A', 'C'],
 *      'C': ['B']
 * }
 * 
 * 
 * 
 * Adjacency Matrix vs Adjacency List
 * => With an adjacency list, we only need to store the values for the edges that exist. With adjacency matrix, you store values irrespective of whether an edge exists of not. Storage wise, an adjacency list is way more efficient.
 * => With adjacency list, inserting and finding adjacent nodes is constant time complexity whereas with adjacency matrix, it is linear time complexity.
 * => An adjacency list allows you to store additional values with an edge such as weight of the edge. With adjacency matrix, such info would have to be stored externally.
 */