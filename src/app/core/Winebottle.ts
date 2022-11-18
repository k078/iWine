import { Cellar } from "./Cellar";
import { Winery } from "./Winery";
import { WineType } from "./WineType";
import { Wineries } from "./Winery";

export class Winebottle {
    id: number;
    wijnsoort: WineType;
    naam: string;
    jaar: number;
    land: string;
    prijs: number;
    zelfGemaakt: boolean;
    wijngaard: Winery;
    cellarList: Cellar[];
    img: string;
    constructor(id: number, wijnsoort: WineType, naam: string, jaar: number, land: string, prijs: number, zelfGemaakt: boolean, wijngaard: Winery, img: string) {
        this.id = id;
        this.wijnsoort = wijnsoort;
        this.naam = naam;
        this.jaar = jaar;
        this.land = land;
        this.prijs = prijs;
        this.zelfGemaakt = zelfGemaakt;
        this.wijngaard = wijngaard;
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
];