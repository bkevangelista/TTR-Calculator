import { Node } from "./Node"
class Graph<T> {
    root: Node<T>;
    nodes: Map<T, Node<T>> = new Map<T, Node<T>>;

    constructor(data: T) {
        this.root = this.addNode(data);
    }
    
    addNode(data: T): Node<T> {
        let node = this.nodes.get(data);
        if (node) {
            return node;
        }

        node = new Node<T>(data);
        this.nodes.set(data, node);
        return node;
    }

    addEdge(source: T, destination: T): void {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination)!;

        console.log(`Source ${JSON.stringify(sourceNode)}`);
        console.log(`Destination ${JSON.stringify(destinationNode)}`);

        if (sourceNode) {
            sourceNode.addNeighbor(destinationNode);
        } else {
            console.error("ERROR: Source node is not defined");
        }
    }

    private dfsHelper(node: Node<T>, visited: Set<T>): void {
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
        const visitedNodes: Set<T> = new Set();

        this.nodes.forEach(node => {
            if (!visitedNodes.has(node.data)) {
                this.dfsHelper(node, visitedNodes);
            }
        });
    }
}

export { Graph }