import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cellar } from 'src/app/components/cellar/Cellar';
import { Winebottle } from 'src/app/components/bottle/Winebottle';
import { CellarService } from '../cellar.service';

@Component({
  selector: 'app-cellar-details',
  templateUrl: './cellar-details.component.html',
  styleUrls: ['./cellar-details.component.css']
})
export class CellarDetailsComponent implements OnInit {
  Cellar: Cellar[] = [];
  listBottles: Winebottle[] | undefined;
  selectedCellar: Cellar | undefined;
  ngOnInit(): void {
    this.Cellar = this.cellarService.getCellars();
    const routeParams = this.route.snapshot.paramMap;
    const CellarIdFromRoute = Number(routeParams.get('CellarId'));
    this.selectedCellar = this.Cellar.find(Cellar => Cellar.id === CellarIdFromRoute);
    this.listBottles = this.selectedCellar?.wineBottleList;
  }
  constructor(private route: ActivatedRoute, private cellarService: CellarService) {}
  removeWineBottle(bottle:Winebottle, cellar:Cellar) {
    this.cellarService.removeWineBottle(bottle, cellar);
  }
  getWorth(cellar:Cellar): number {
    var cellarworth = this.cellarService.getWorth(cellar);
    if(cellarworth < 0) {
      cellarworth = 0;
    }
    return cellarworth;
  }
}
