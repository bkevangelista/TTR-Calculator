import { City } from "./City";
import { Color } from "./Color";

interface EdgeConfig {
    cities: City[];
    color: Color;
    weight: number;
}

export const allEdges: EdgeConfig[] = [
    {
        cities: [City.Atlanta, City.Charleston],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Atlanta, City.Miami],
        color: Color.Blue,
        weight: 5
    },
    {
        // SHOULD BE 2 ROUTES
        cities: [City.Atlanta, City.Raleigh],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Atlanta, City.NewOrleans],
        color: Color.Yellow, // ALSO ORANGE
        weight: 4
    },
    {
        cities: [City.Atlanta, City.Nashville],
        color: Color.Wild,
        weight: 1
    },
    {
        cities: [City.Miami, City.NewOrleans],
        color: Color.Red,
        weight: 6
    },
    {
        cities: [City.Charleston, City.Miami],
        color: Color.Pink,
        weight: 4
    },
    {
        cities: [City.Charleston, City.Raleigh],
        color: Color.Wild,
        weight: 2
    },
    {
        // SHOULD BE 2 ROUTES
        cities: [City.Raleigh, City.Washington],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Pittsburgh, City.Raleigh],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Pittsburgh, City.Washington],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.NewYork, City.Washington],
        color: Color.Orange, // ALSO BLACK
        weight: 2
    },
    {
        cities: [City.NewYork, City.Pittsburgh],
        color: Color.White, // ALSO GREEN
        weight: 2
    },
    {
        cities: [City.Boston, City.NewYork],
        color: Color.Red, // ALSO YELLOW
        weight: 2
    },
    {
        // SHOULD BE 2 ROUTES
        cities: [City.Boston, City.Montreal],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Montreal, City.Toronto],
        color: Color.Wild,
        weight: 3
    },
    {
        cities: [City.Montreal, City.NewYork],
        color: Color.Blue,
        weight: 3
    },
    {
        cities: [City.Pittsburgh, City.Toronto],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Montreal, City.SaultStMarie],
        color: Color.Black,
        weight: 5
    },
    {
        cities: [City.SaultStMarie, City.Toronto],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Duluth, City.Toronto],
        color: Color.Pink,
        weight: 6
    },
    {
        cities: [City.Chicago, City.Toronto],
        color: Color.White,
        weight: 4
    },
    {
        cities: [City.Chicago, City.Pittsburgh],
        color: Color.Orange, // ALSO BLACK
        weight: 2
    },
    {
        cities: [City.Nashville, City.Pittsburgh],
        color: Color.Yellow,
        weight: 4
    },
    {
        cities: [City.Nashville, City.Raleigh],
        color: Color.Black,
        weight: 3
    },
    {
        cities: [City.LittleRock, City.Nashville],
        color: Color.White,
        weight: 3
    },
    {
        cities: [City.Nashville, City.SaintLouis],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.LittleRock, City.NewOrleans],
        color: Color.Green,
        weight: 3
    },
    {
        cities: [City.Houston, City.NewOrleans],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Dallas, City.Houston],
        color: Color.Wild,
        weight: 1
    },
    {
        cities: [City.Dallas, City.LittleRock],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.LittleRock, City.OklahomaCity],
        color: Color.Wild,
        weight: 2
    },
    {
        // SHOULD BE 2 ROUTES
        cities: [City.Dallas, City.OklahomaCity],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.LittleRock, City.SaintLouis],
        color: Color.Wild,
        weight: 2
    },
    {
        // SHOULD BE 2 ROUTES
        cities: [City.KansasCity, City.OklahomaCity],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.KansasCity, City.SaintLouis],
        color: Color.Blue, // ALSO PINK
        weight: 2
    },
    {
        cities: [City.Chicago, City.SaintLouis],
        color: Color.Green, // ALSO WHITE
        weight: 2
    },
    {
        cities: [City.Chicago, City.Omaha],
        color: Color.Blue,
        weight: 4
    },
    {
        cities: [City.KansasCity, City.Omaha],
        color: Color.Wild,
        weight: 1
    },
    {
        // SHOULD BE 2 ROUTSE
        cities: [City.Duluth, City.Omaha],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Chicago, City.Duluth],
        color: Color.Red,
        weight: 3
    },
    {
        cities: [City.Duluth, City.SaultStMarie],
        color: Color.Wild,
        weight: 3
    },
    {
        cities: [City.SaultStMarie, City.Winnipeg],
        color: Color.Wild,
        weight: 6
    },
    {
        cities: [City.Duluth, City.Winnipeg],
        color: Color.Black,
        weight: 4
    },
    {
        cities: [City.Calgary, City.Winnipeg],
        color: Color.White,
        weight: 6
    },
    {
        cities: [City.Helena, City.Winnipeg],
        color: Color.Blue,
        weight: 4
    },
    {
        cities: [City.Duluth, City.Helena],
        color: Color.Orange,
        weight: 6
    },
    {
        cities: [City.Helena, City.Omaha],
        color: Color.Red,
        weight: 5
    },
    {
        cities: [City.Denver, City.Omaha],
        color: Color.Pink,
        weight: 4
    },
    {
        cities: [City.Denver, City.KansasCity],
        color: Color.Black, // ALSO ORANGE
        weight: 4
    },
    {
        cities: [City.Denver, City.OklahomaCity],
        color: Color.Red,
        weight: 4
    },
    {
        cities: [City.OklahomaCity, City.SantaFe],
        color: Color.Blue,
        weight: 3
    },
    {
        cities: [City.ElPaso, City.OklahomaCity],
        color: Color.Yellow,
        weight: 5
    },
    {
        cities: [City.Dallas, City.ElPaso],
        color: Color.Red,
        weight: 4
    },
    {
        cities: [City.ElPaso, City.Houston],
        color: Color.Green,
        weight: 6
    },
    {
        cities: [City.Calgary, City.Vancouver],
        color: Color.Wild,
        weight: 3
    },
    {
        // SHOULD BE 2 ROUTES
        cities: [City.Seattle, City.Vancouver],
        color: Color.Wild,
        weight: 1 
    },
    {
        // SHOULD BE 2 ROUTES
        cities: [City.Portland, City.Seattle],
        color: Color.Wild,
        weight: 1
    },
    {
        cities: [City.Calgary, City.Seattle],
        color: Color.Wild,
        weight: 4
    },
    {
        cities: [City.Calgary, City.Helena],
        color: Color.Wild,
        weight: 4
    },
    {
        cities: [City.Helena, City.Seattle],
        color: Color.Yellow,
        weight: 6
    },
    {
        cities: [City.Helena, City.SaltLakeCity],
        color: Color.Pink,
        weight: 3
    },
    {
        cities: [City.Denver, City.Helena],
        color: Color.Green,
        weight: 4
    },
    {
        cities: [City.Portland, City.SaltLakeCity],
        color: Color.Blue,
        weight: 6
    },
    {
        cities: [City.Portland, City.SanFrancisco],
        color: Color.Green,
        weight: 5 // ALSO PINK
    },
    {
        cities: [City.LosAngeles, City.SanFrancisco],
        color: Color.Yellow, // ALSO PINK
        weight: 3
    },
    {
        cities: [City.SaltLakeCity, City.SanFrancisco],
        color: Color.Orange, // ALSO WHITE
        weight: 5
    },
    {
        cities: [City.Denver, City.SaltLakeCity],
        color: Color.Red, // ALSO YELLOW
        weight: 3
    },
    {
        cities: [City.LasVegas, City.SaltLakeCity],
        color: Color.Orange,
        weight: 3
    },
    {
        cities: [City.LasVegas, City.LosAngeles],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.LosAngeles, City.Phoenix],
        color: Color.Wild,
        weight: 3
    },
    {
        cities: [City.ElPaso, City.LosAngeles],
        color: Color.Black,
        weight: 6
    },
    {
        cities: [City.ElPaso, City.Phoenix],
        color: Color.Wild,
        weight: 3
    },
    {
        cities: [City.Denver, City.Phoenix],
        color: Color.White,
        weight: 5
    },
    {
        cities: [City.Denver, City.SantaFe],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.ElPaso, City.SantaFe],
        color: Color.Wild,
        weight: 2
    },
    {
        cities: [City.Phoenix, City.SantaFe],
        color: Color.Wild,
        weight: 3
    }
]