import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Winebottle } from '../../bottle/Winebottle';
import { Cellar } from '../Cellar';
import { CellarService } from '../cellar.service';

@Component({
  selector: 'app-cellar-update',
  templateUrl: './cellar-update.component.html',
  styleUrls: ['./cellar-update.component.css']
})
export class CellarUpdateComponent implements OnInit {
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
  constructor(private route: ActivatedRoute, private cellarService: CellarService) {
   }
  }
