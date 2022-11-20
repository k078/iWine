import { User } from "./User";
import { Winebottle } from "./Winebottle";
import { BottleService } from "../components/bottle/bottle.service";

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
        this.wineBottleList = [this.bottleService.getBottleById(1)];
        this.worth = 0;
    }
}