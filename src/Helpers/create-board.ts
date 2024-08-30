import { Graph } from "../Components/Graph";
import { City } from "../Constants/City";
import { allEdges } from "../Constants/Edge";

export function createBoard(): Graph {
    const board = new Graph(City.Atlanta);

    addAllNodes(board);
    addAllEdges(board);

    return board;
}

function addAllNodes(graph: Graph): void {
    Object.values(City).forEach(city => {
        // Skipping Atlanta because it is already initialized when creating the graph
        if (!(city === City.Atlanta)) {
            graph.addNode(city);
        }
    })
}

function addAllEdges(graph: Graph): void {
    allEdges.forEach(edge => {
        graph.addEdge(edge.cities[0], edge.cities[1], edge.weight, edge.color);
    })
}