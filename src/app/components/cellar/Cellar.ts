import { User } from "../user/User";
import { Winebottle } from "../bottle/Winebottle";

export class Cellar{
    id:number | undefined;
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
}
