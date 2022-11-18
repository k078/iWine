import { User } from "./User";
import { Winebottle } from "./Winebottle";
import { users } from "./User";

export class Cellar{
    adres:string;
    eigenaar:User;
    area:number;
    wineBottleList:Winebottle[];
    waarde:number;
    constructor(adres:string,eigenaar:User,area:number){
        this.adres = adres;
        this.eigenaar = eigenaar;
        this.area = area;
        this.wineBottleList = [];
        this.waarde = 0;
    }
    addWineBottle(wineBottle:Winebottle){
        this.wineBottleList.push(wineBottle);
        this.waarde += wineBottle.prijs;
    }
    removeWineBottle(wineBottle:Winebottle){
        this.wineBottleList.splice(this.wineBottleList.indexOf(wineBottle),1);
        this.waarde -= wineBottle.prijs;
    }
    getWaarde(){
        return this.waarde;
    }
}
export const cellars = [
    new Cellar("Kerkstraat 1, Dendermonde", users[0], 25),
]; 