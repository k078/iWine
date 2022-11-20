import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";
import { Winebottle } from "src/app/core/Winebottle";
import { Cellar } from "../../core/Cellar";

@Injectable({
    providedIn: "root",
})
export class CellarService {
    userService: UserService = new UserService();
    cellars = [
        new Cellar(1, "Kerkstraat 1, Dendermonde", this.userService.getUserById(1), 25),
        new Cellar(2, "Hoge Nieuwstraat 93, Dordrecht", this.userService.getUserById(1), 30),
    ];

    constructor() {}

    getCellars(): Cellar[] {
        return this.cellars;
    }

    getCellarById(id: number): Cellar {
        return this.cellars.filter((cellar) => cellar.id === id)[0];
    }

    addCellar(cellar: Cellar): void {
        this.cellars.push(cellar);
    }

    removeCellar(cellar: Cellar): void {
        this.cellars.splice(this.cellars.indexOf(cellar), 1);
    }
    updateCellar(cellar: Cellar): void {
        this.cellars[this.cellars.indexOf(cellar)] = cellar;
    }
    addWineBottle(wineBottle:Winebottle, cellar:Cellar): void{
        cellar.wineBottleList.push(wineBottle);
        cellar.worth += wineBottle.price;
    }
    removeWineBottle(wineBottle:Winebottle, cellar:Cellar){
        cellar.wineBottleList.splice(cellar.wineBottleList.indexOf(wineBottle), 1);
        cellar.worth -= wineBottle.price;
    }
    getWaarde(cellar:Cellar): number{
        return cellar.worth;
    }
    getBottles(cellar:Cellar): Winebottle[]{
        return cellar.wineBottleList;
    }
}