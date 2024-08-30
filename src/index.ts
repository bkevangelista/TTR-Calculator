import { createBoard } from "./Helpers/create-board";

const graph = createBoard();
console.log(graph.edges);

graph.dfs();