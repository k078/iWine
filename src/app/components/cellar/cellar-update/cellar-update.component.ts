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
    this.cellarForm = new FormGroup({
      address: new FormControl(this.selectedCellar?.address),
      area : new FormControl(this.selectedCellar?.area),
    });
  }
  constructor(
    private route: ActivatedRoute,
    private cellarService: CellarService,
    private router: Router
  ) {}
  onSubmit() {
    if (this.selectedCellar != null) {
      console.log('Submitting the form');
      // Update bestaande entry in arraylist
      this.cellarService.setCellarArea(this.selectedCellar, this.selectedCellar.area);
      this.cellarService.setCellarAddress(this.selectedCellar, this.selectedCellar.address);
      this.router.navigate(['../cellar']);
    }
  }
}
