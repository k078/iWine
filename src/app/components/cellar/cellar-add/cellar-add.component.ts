import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cellar } from '../Cellar';
import { CellarService } from '../cellar.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cellar-add',
  templateUrl: './cellar-add.component.html',
  styleUrls: ['./cellar-add.component.css'],
})
export class CellarAddComponent implements OnInit {
  cellar: Cellar | undefined;
  cellarForm: FormGroup | any;
  ngOnInit(): void {
    this.cellarForm = new FormGroup({
      address: new FormControl(),
      area : new FormControl(),
    });
  }
  constructor(
    private route: ActivatedRoute,
    private cellarService: CellarService,
    private router: Router
  ) {}
  onSubmit() {
    this.cellarService.addCellar(this.cellarForm.value.address, this.cellarForm.value.area);
    this.router.navigate(['../cellar']);
  }
}
