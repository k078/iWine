import { Component, OnInit } from '@angular/core';
import { Cellar } from '../Cellar';
import { CellarService } from '../cellar.service';


@Component({
  selector: 'app-cellar-list',
  templateUrl: './cellar-list.component.html',
  styleUrls: ['./cellar-list.component.css']
})
export class CellarListComponent implements OnInit {
  cellars : Cellar[] = [];
  constructor(private cellarService : CellarService) { }

  ngOnInit(): void {
    this.cellars = this.cellarService.getCellars();
  }
  removeCellar(cellar:Cellar) {
    this.cellarService.removeCellar(cellar);
  }
  updateCellar(cellar:Cellar) {
    this.cellarService.updateCellar(cellar);
  }

}
