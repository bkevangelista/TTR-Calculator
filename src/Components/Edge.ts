import { City } from "../Constants/City";
import { Color } from "../Constants/Color";

// An Edge is only defined for adjacent cities
class Edge {
    cities: City[];
    color: Color;
    weight: number;

    constructor(cities: City[], color: Color, weight: number) {
        this.cities = cities;
        this.color = color;
        this.weight = weight;
    }
}

export { Edge }