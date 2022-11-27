import { Injectable } from "@angular/core";
import { Cellar } from "src/app/components/cellar/Cellar";
import { User } from "src/app/components/user/User";

@Injectable({
    providedIn: "root",
})
export class UserService {
    users = [
        new User(1, "KalleV", "admin", "admin@admin.nl"),
        new User(2, "Karel", "admin", "karel@mail.com"),
        new User(3, "Sten", "Reijerse", "sten@admin.nl"),

    ];
    getUsers(): User[] {
        return this.users;
    }
    getUserById(id: number): User {
        return this.users.filter((user) => user.id === id)[0];
    }
    addUser(user: User): void {
        this.users.push(user);
    }
    removeUser(user:User): void{
        this.users.splice(this.users.indexOf(user),1);
    }
    addCellar(cellar:Cellar, user:User): void{
      if(cellar.worth!=null){
      user.cellarList.push(cellar);
        user.totalWorth += cellar.worth;
      }
    }
    removeCellar(cellar:Cellar, user:User): void{
      if(cellar.worth!=null){
      user.cellarList.splice(user.cellarList.indexOf(cellar),1);
        user.totalWorth -= cellar.worth;
      }
    }
    getCellars(user:User): Cellar[]{
        return user.cellarList;
    }
    getTotalWorth(user:User): number{
        return user.totalWorth;
    }
}
