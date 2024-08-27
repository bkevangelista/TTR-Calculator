class Node<T> {
    data: T;
    adjNodes: Node<T>[];

    constructor(data: T) {
        this.data = data;
        this.adjNodes = new Array<Node<T>>;
    }

    addNeighbor(node: Node<T>) : void {
        this.adjNodes.push(node);
        console.log(`in addNeighbor: ${JSON.stringify(this.data)}, ${JSON.stringify(this.adjNodes)}`);
    }
}

export { Node }