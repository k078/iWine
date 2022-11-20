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
    addCellar(cellar:Cellar){
        this.cellarList.push(cellar);
        this.totalWorth += cellar.worth;
    }
    removeCellar(cellar:Cellar){
        this.cellarList.splice(this.cellarList.indexOf(cellar),1);
        this.totalWorth -= cellar.worth;
    }
    getTotalWorth(){
        return this.totalWorth;
    }
    addFriend(user:User){
        this.friendList.push(user);
    }
    removeFriend(user:User){
        this.friendList.splice(this.friendList.indexOf(user),1);
    }
}
export const users = [
    new User(1, "admin", "admin", "admin@admin.nl"),
];