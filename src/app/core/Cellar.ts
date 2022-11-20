import { User } from "./User";
import { Winebottle } from "./Winebottle";
import { users } from "./User";

export class Cellar{
    id:number;
    address:string;
    owner:User;
    area:number;
    wineBottleList:Winebottle[];
    worth:number;
    constructor(id:number, address:string,owner:User,area:number){
        this.id = id;
        this.address = address;
        this.owner = owner;
        this.area = area;
        this.wineBottleList = [];
        this.worth = 0;
    }
    addWineBottle(wineBottle:Winebottle){
        this.wineBottleList.push(wineBottle);
        this.worth += wineBottle.price;
    }
    removeWineBottle(wineBottle:Winebottle){
        this.wineBottleList.splice(this.wineBottleList.indexOf(wineBottle),1);
        this.worth -= wineBottle.price;
    }
    getWaarde(){
        return this.worth;
    }
}
export const cellars = [
    new Cellar(1, "Kerkstraat 1, Dendermonde", users[0], 25),
]; 