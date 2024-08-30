import { createBoard } from "./Helpers/create-board";
import { City } from "./Constants/City";
import { Color } from "./Constants/Color";
import { Player } from "./Components/Player";

const graph = createBoard();
console.log(graph.edges);

graph.dfs();

const playerOne: Player = new Player();
playerOne.addEdgeForPlayer(City.Seattle, City.Phoenix, 2, Color.Blue);
playerOne.addEdgeForPlayer(City.Seattle, City.Portland, 6, Color.Wild);
console.log(playerOne);