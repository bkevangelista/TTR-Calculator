import { NUM_PIECES, PIECES_TO_POINTS } from "../Constants/GeneralConstants";
import { City } from "../Constants/City";
import { Color } from "src/Constants/Color";
import { Edge } from "./Edge";
import { Pair } from "./Pair";

class Player {
    pieces: number = NUM_PIECES;
    points: number = 0;
    edges: Map<Pair<City, City>, Edge> = new Map<Pair<City, City>, Edge>;

    addEdgeForPlayer(color: Color, weight: number, fromCity: City, toCity: City): void {
        this.pieces -= weight;
        this.points += PIECES_TO_POINTS?.[weight] || 0;

        const cities: City[] = [fromCity, toCity].sort((a, b) => 
            b.localeCompare(a));
        const cityPair: Pair<City, City> =  new Pair(cities[0], cities[1]);
        const newEdge: Edge = new Edge(
            cities,
            color,
            weight
        );
        this.edges.set(cityPair, newEdge);
    }
}

export { Player }