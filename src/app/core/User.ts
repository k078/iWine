import { Cellar } from "./Cellar";

export class User{
    cellarList:Cellar[];
    id:number;
    username:string;
    password:string;
    email:string;
    totaalWaarde:number;
    constructor(id:number,username:string,password:string,email:string){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.cellarList = [];
        this.totaalWaarde = 0;
    }
    addCellar(cellar:Cellar){
        this.cellarList.push(cellar);
        this.totaalWaarde += cellar.waarde;
    }
    removeCellar(cellar:Cellar){
        this.cellarList.splice(this.cellarList.indexOf(cellar),1);
        this.totaalWaarde -= cellar.waarde;
    }
    getTotaalWaarde(){
        return this.totaalWaarde;
    }
}
export const users = [
    new User(1, "admin", "admin", "admin@admin.nl"),
];