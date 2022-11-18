import { Component, OnInit } from '@angular/core';
import { winebottles } from 'src/app/core/Winebottle';
@Component({
  selector: 'app-bottle-list',
  templateUrl: './bottle-list.component.html',
  styleUrls: ['./bottle-list.component.css']
})
export class BottleListComponent implements OnInit {
  bottles = winebottles;
  constructor() { }

  ngOnInit(): void {
  }

}
