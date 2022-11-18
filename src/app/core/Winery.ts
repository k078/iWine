import { User } from "./User";
import { Winebottle } from "./Winebottle";

export class Winery{
    naam:string;
    adres:string;
    land:string;
    datumOprichting:Date;
    oprichter:string|User;
    wineBottleList:Winebottle[];
    constructor(naam:string,adres:string,land:string ,datumOprichting:Date,oprichter:string){
        this.naam = naam;
        this.adres = adres;
        this.land = land;
        this.datumOprichting = datumOprichting;
        this.oprichter = oprichter;
        this.wineBottleList = [];
    }
    addWineBottle(wineBottle:Winebottle){
        this.wineBottleList.push(wineBottle);
    }
    removeWineBottle(wineBottle:Winebottle){
        this.wineBottleList.splice(this.wineBottleList.indexOf(wineBottle),1);
    }
}
export const Wineries = [
    new Winery("Cantine Settesoli", "Strada Statale 115, 92013 Menfi (AG)", "Italië", new Date(1958, 1, 1), "Giuseppe Bursi"),
    new Winery("La Palma", "Peumo, Cachapoal Valley", "Chili", new Date(1824, 1, 1), "Francisco Ignacio,"),
]