import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Winebottle } from 'src/app/components/bottle/Winebottle';
import { BottleService } from '../bottle.service';

@Component({
  selector: 'app-bottle-details',
  templateUrl: './bottle-details.component.html',
  styleUrls: ['./bottle-details.component.css']
})
export class BottleDetailsComponent implements OnInit {
  bottle : Winebottle[] = [];
  selectedBottle: Winebottle | undefined;
  ngOnInit(): void {
    this.bottle = this.bottleService.getBottles();
    const routeParams = this.route.snapshot.paramMap;
    const bottleIdFromRoute = Number(routeParams.get('WinebottleId'));
    this.selectedBottle = this.bottle.find(bottle => bottle.id === bottleIdFromRoute);
  }
  constructor(private route: ActivatedRoute, private bottleService: BottleService) {
   }
}



