import { Graph } from "./Components/Graph";
import { Node } from "./Components/Node";

const graph = new Graph("Phoenix");
graph.addNode("Seattle");
console.log(JSON.stringify(graph));
graph.addEdge("Phoenix", "Seattle");

graph.dfs();
console.log(JSON.stringify(graph));
console.log('bestie branden is the best');