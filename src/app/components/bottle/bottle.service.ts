import { Injectable } from "@angular/core";
import { Winebottle, WineType } from "src/app/core/Winebottle";
import { Wineries} from "src/app/core/Winery";

@Injectable({
    providedIn: "root",
})
export class BottleService {
    winebottles = [
        new Winebottle(1, WineType.SauvignonBlanc, "Sten's Sauv", 2018, "Chili", 5.99, false, Wineries[1], "/assets/stens-sauv.png"),
        new Winebottle(2, WineType.SauvignonBlanc, "Kalle's Pinot", 2018, "Netherlands", 10.49, true, Wineries[0], "/assets/settesoliPinot.png"),
        new Winebottle(3, WineType.SauvignonBlanc, "Test Pinot", 2018, "Netherlands", 10.49, true, Wineries[0], "https://i0.wp.com/www.vindom.shop/wp-content/uploads/2020/07/Terrana-Pinot-Grigio-Front-Bottle.png?fit=650%2C650&ssl=1"),
        new Winebottle(4, WineType.Verdejo, "Test Verdejo", 2022, "Spain", 9.95, false, Wineries[0], "https://www.torres.es/sites/default/files/2022-07/CELESTE_VERDEJO_1500x1500px_0.png"),
    ];
    
    constructor() {
        
    }

    getBottles(): Winebottle[] {
        return this.winebottles;
    }
    getBottleById(id: number): Winebottle {
        return this.winebottles.filter((bottle) => bottle.id === id)[0];
    }
}