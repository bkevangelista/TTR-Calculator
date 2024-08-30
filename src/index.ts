import { Graph } from "./Components/Graph";
import { City } from "./Constants/City";
import { Color } from "./Constants/Color";
import { Player } from "./Components/Player";

const graph = new Graph(City.Phoenix);
graph.addNode(City.Seattle);
graph.addNode(City.Vancouver);
graph.addNode(City.Portland);
graph.addEdge(City.Seattle, City.Phoenix, 2, Color.Blue);
graph.addEdge(City.Seattle, City.Vancouver, 1, Color.Wild);
graph.addEdge(City.Seattle, City.Portland, 6, Color.Wild);

console.log(graph.edges);

graph.dfs();

const playerOne: Player = new Player();
playerOne.addEdgeForPlayer(City.Seattle, City.Phoenix, 2, Color.Blue);
playerOne.addEdgeForPlayer(City.Seattle, City.Portland, 6, Color.Wild);
console.log(playerOne);