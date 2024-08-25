import { Node } from "./Node"
class Graph<T> {
    root: Node<T>;
    nodes: Map<T, Node<T>> = new Map<T, Node<T>>;

    constructor(data: T) {
        this.root = new Node<T>(data);
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
        const destinationNode = this.nodes.get(destination);

        if (sourceNode) {
            sourceNode.addNeighbor(destinationNode);
        } else {
            console.error("ERROR: Source node is not defined");
        }
    }
}

export { Graph }