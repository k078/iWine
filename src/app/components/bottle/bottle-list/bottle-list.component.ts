import { Component, OnInit } from '@angular/core';
import { BottleService } from '../bottle.service';
import { CellarService } from '../../cellar/cellar.service';
@Component({
  selector: 'app-bottle-list',
  templateUrl: './bottle-list.component.html',
  styleUrls: ['./bottle-list.component.css']
})
export class BottleListComponent implements OnInit {
  CellarService: CellarService = new CellarService();
  cellars = this.CellarService.getCellars();
  BottleService: BottleService = new BottleService();
  bottles = this.BottleService.getBottles();
  constructor() { }

  ngOnInit(): void {
  }

}
