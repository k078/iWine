import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Winebottle, winebottles } from 'src/app/core/Winebottle';

@Component({
  selector: 'app-bottle-details',
  templateUrl: './bottle-details.component.html',
  styleUrls: ['./bottle-details.component.css']
})
export class BottleDetailsComponent implements OnInit {
  bottle = winebottles;
  selectedBottle: Winebottle | undefined;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap; 
    const bottleIdFromRoute = Number(routeParams.get('WinebottleId'));
    this.selectedBottle = this.bottle.find(bottle => bottle.id === bottleIdFromRoute);
  }

  

  constructor(private route: ActivatedRoute) {
   }

  

}
