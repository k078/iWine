import { Component, OnInit } from '@angular/core';
import { BottleService } from '../bottle.service';
import { CellarService } from '../../cellar/cellar.service';
import { Cellar } from '../../cellar/Cellar';
import { Winebottle } from '../Winebottle';
@Component({
  selector: 'app-bottle-list',
  templateUrl: './bottle-list.component.html',
  styleUrls: ['./bottle-list.component.css']
})
export class BottleListComponent implements OnInit {
  cellars : Cellar[] = [];
  bottles : Winebottle[] = [];

  constructor(private cellarService : CellarService, private bottleService : BottleService) { }

  ngOnInit(): void {
    this.cellars = this.cellarService.getCellars();
    this.bottles = this.bottleService.getBottles();
  }

}
