import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";
import { Winebottle } from "src/app/components/bottle/Winebottle";
import { Cellar } from "./Cellar";

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

    addCellar(address:string, area:number): void {
        this.cellars.push(new Cellar(this.cellars.length + 1, address, this.userService.getUserById(1), area));
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
    removeWineBottle(wineBottle:Winebottle, cellar:Cellar): void{
      cellar.worth -= wineBottle.price;
      cellar.wineBottleList.splice(cellar.wineBottleList.indexOf(wineBottle), 1);
    }
    getWorth(cellar:Cellar): number{
        return cellar.worth;
    }
    getBottles(cellar:Cellar): Winebottle[]{
        return cellar.wineBottleList;
    }
    getCellarAddress(cellar:Cellar): string{
        return cellar.address;
    }
    setCellarAddress(cellar:Cellar, address:string): void{
        cellar.address = address;
    }
    getCellarArea(cellar:Cellar): number{
        return cellar.area;
    }
    setCellarArea(cellar:Cellar, area:number): void{
        cellar.area = area;
    }
}
