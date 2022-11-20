import { Cellar } from "../cellar/Cellar";
import { Winery } from "../winery/Winery";

export class Winebottle {
    id: number;
    winetype: WineType;
    name: string;
    year: number;
    country: string;
    price: number;
    selfmade: boolean;
    winery: Winery;
    cellarList: Cellar[];
    img: string;
    constructor(id: number, winetype: WineType, name: string, year: number, country: string, price: number, selfmade: boolean, winery: Winery, img: string) {
        this.id = id;
        this.winetype = winetype;
        this.name = name;
        this.year = year;
        this.country = country;
        this.price = price;
        this.selfmade = selfmade;
        this.winery = winery;
        this.cellarList = [];
        this.img = img;
    }
}
export enum WineType {
    SauvignonBlanc = "Sauvignon Blanc",
    Chardonnay = "Chardonnay",
    Verdejo = "Verdejo",
    PinotGrigio = "Pinot Grigio",
}
