import { Injectable } from "@angular/core";
import { Cellar } from "src/app/core/Cellar";
import { User } from "src/app/core/User";

@Injectable({
    providedIn: "root",
})
export class UserService {
    users = [
        new User(1, "KalleV", "admin", "admin@admin.nl"),   
    ];
    getUsers(): User[] {
        return this.users;
    }
    getUserById(id: number): User {
        return this.users.filter((user) => user.id === id)[0];
    }
    addCellar(cellar:Cellar, user:User): void{
        user.cellarList.push(cellar);
        user.totalWorth += cellar.worth;
    }
    removeCellar(cellar:Cellar, user:User): void{
        user.cellarList.splice(user.cellarList.indexOf(cellar),1);
        user.totalWorth -= cellar.worth;
    }
    getCellars(user:User): Cellar[]{
        return user.cellarList;
    }
    getTotalWorth(user:User): number{
        return user.totalWorth;
    }
}