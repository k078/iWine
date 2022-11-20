import { CellarService } from "../components/cellar/cellar.service";
import { Cellar } from "./Cellar";

export class User{
    cellarList:Cellar[];
    friendList:User[];
    id:number;
    username:string;
    password:string;
    email:string;
    totalWorth:number;
    constructor(id:number,username:string,password:string,email:string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.cellarList = [];
        this.totalWorth = 0;
        this.friendList = [];
    }
}