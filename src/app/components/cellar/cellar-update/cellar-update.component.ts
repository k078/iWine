import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cellar } from '../Cellar';
import { CellarService } from '../cellar.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cellar-update',
  templateUrl: './cellar-update.component.html',
  styleUrls: ['./cellar-update.component.css'],
})
export class CellarUpdateComponent implements OnInit {
  componentId: string | null | undefined;
  componentExists: boolean = false;
  cellar: Cellar | undefined;
  cellarControl = new FormControl('');
  Cellars: Cellar[] = [];
  selectedCellar: Cellar | undefined;
  cellarForm: FormGroup | any;
  ngOnInit(): void {
    this.Cellars = this.cellarService.getCellars();
    const routeParams = this.route.snapshot.paramMap;
    const CellarIdFromRoute = Number(routeParams.get('CellarId'));
    this.selectedCellar = this.Cellars.find(
      (Cellar) => Cellar.id === CellarIdFromRoute
    );
    this.route.paramMap.subscribe((params) => {
      this.componentId = params.get('id');
      if (this.componentId) {
        // Bestaande cellar
        console.log('Bestaande component');
        this.componentExists = true;
        // Haal de bestaande cellar uit het array.
        // We maken hier een kopie van het oorspronkelijk object!
        this.cellar = {
          ...this.cellarService.getCellarById(Number(this.componentId)),
        };
      }
    });
  }
  constructor(
    private route: ActivatedRoute,
    private cellarService: CellarService,
    private router: Router
  ) {}
  onSubmit(adress: string, area: number) {
    if (this.selectedCellar != null) {
      console.log('Submitting the form');
      // Update bestaande entry in arraylist
      this.cellarService.setCellarArea(this.selectedCellar, area);
      this.cellarService.setCellarAddress(this.selectedCellar, adress);
      this.router.navigate(['..']);
    }
  }
}
