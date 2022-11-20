import { Component, OnInit } from '@angular/core';
import { CellarService } from '../cellar.service';


@Component({
  selector: 'app-cellar-list',
  templateUrl: './cellar-list.component.html',
  styleUrls: ['./cellar-list.component.css']
})
export class CellarListComponent implements OnInit {
  CellarService: CellarService = new CellarService();
  cellars = this.CellarService.getCellars();
  constructor() { }

  ngOnInit(): void {
  }

}
