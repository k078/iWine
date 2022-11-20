import { Cellar } from "./Cellar";
import { Winery } from "./Winery";
import { WineType } from "./WineType";
import { Wineries } from "./Winery";

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
    addCellar(cellar: Cellar) {
        this.cellarList.push(cellar);
    }
    removeCellar(cellar: Cellar) {
        this.cellarList.splice(this.cellarList.indexOf(cellar), 1);
    }
}
export const winebottles = [
    new Winebottle(1, WineType.SauvignonBlanc, "Sten's Sauv", 2018, "Chili", 5.99, false, Wineries[1], "/assets/stens-sauv.png"),
    new Winebottle(2, WineType.SauvignonBlanc, "Kalle's Pinot", 2018, "Netherlands", 10.49, true, Wineries[0], "/assets/settesoliPinot.png"),
    new Winebottle(3, WineType.SauvignonBlanc, "Test Pinot", 2018, "Netherlands", 10.49, true, Wineries[0], "https://i0.wp.com/www.vindom.shop/wp-content/uploads/2020/07/Terrana-Pinot-Grigio-Front-Bottle.png?fit=650%2C650&ssl=1"),
    new Winebottle(4, WineType.Verdejo, "Test Verdejo", 2022, "Spain", 9.95, false, Wineries[0], "https://www.torres.es/sites/default/files/2022-07/CELESTE_VERDEJO_1500x1500px_0.png"),
];