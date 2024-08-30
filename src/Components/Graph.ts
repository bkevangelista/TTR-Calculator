import { Edge } from "./Edge";
import { Node } from "./Node";
import { Pair } from "./Pair";
import { City } from "../Constants/City";
import { Color } from "../Constants/Color";

class Graph {
    root: Node<City>;
    nodes: Map<City, Node<City>> = new Map<City, Node<City>>;
    edges: Map<Pair<City, City>, Edge> = new Map<Pair<City, City>, Edge>;

    constructor(data: City) {
        this.root = this.addNode(data);
    }
    
    addNode(data: City): Node<City> {
        let node = this.nodes.get(data);
        if (node) {
            return node;
        }

        node = new Node<City>(data);
        this.nodes.set(data, node);
        return node;
    }

    addEdge(source: City, destination: City, weight: number, color: Color): void {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination)!;

        if (sourceNode) {
            const cities: City[] = [];
            cities.push(sourceNode.data);
            cities.push(destinationNode.data);
            const edge = new Edge(
                cities,
                color,
                weight);
                
            sourceNode.addNeighbor(destinationNode);
            destinationNode.addNeighbor(sourceNode);

            this.edges.set(
                new Pair(sourceNode.data, destinationNode.data), 
                edge);
        } else {
            console.error("ERROR: Source node is not defined");
        }
    }

    private dfsHelper(node: Node<City>, visited: Set<City>): void {
        if (!node) return;

        visited.add(node.data);

        console.log(node.data);

        node.adjNodes.forEach(neighbor => {
            if (!visited.has(neighbor.data)) {
                this.dfsHelper(neighbor, visited);
            }
        });
    }

    dfs(): void {
        const visitedNodes: Set<City> = new Set();

        this.nodes.forEach(node => {
            if (!visitedNodes.has(node.data)) {
                this.dfsHelper(node, visitedNodes);
            }
        });
    }
}

export { Graph }