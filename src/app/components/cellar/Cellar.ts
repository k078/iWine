import { User } from "../user/User";
import { Winebottle } from "../bottle/Winebottle";
import { BottleService } from "../bottle/bottle.service";

export class Cellar{
    id:number;
    address:string;
    owner:User;
    area:number;
    wineBottleList:Winebottle[];
    worth:number;
    bottleService:BottleService = new BottleService();
    constructor(id:number, address:string,owner:User,area:number){
        this.id = id;
        this.address = address;
        this.owner = owner;
        this.area = area;
        this.wineBottleList = [];
        this.worth = 0;
    }
}
