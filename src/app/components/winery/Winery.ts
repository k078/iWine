import { User } from "../user/User";
import { Winebottle } from "../bottle/Winebottle";

export class Winery{
    id:number;
    name:string;
    address:string;
    country:string;
    establishment:Date;
    founder:string|User;
    wineBottleList:Winebottle[];
    constructor(id:number,name:string,address:string,country:string ,establishment:Date,founder:string){
        this.id=id;
        this.name = name;
        this.address = address;
        this.country = country;
        this.establishment = establishment;
        this.founder = founder;
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
    new Winery(1, "Cantine Settesoli", "Strada Statale 115, 92013 Menfi (AG)", "Italië", new Date(1958, 1, 1), "Giuseppe Bursi"),
    new Winery(2, "La Palma", "Peumo, Cachapoal Valley", "Chili", new Date(1824, 1, 1), "Francisco Ignacio,"),
]