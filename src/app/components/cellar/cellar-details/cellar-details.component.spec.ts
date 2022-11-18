import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarDetailsComponent } from './cellar-details.component';

describe('CellarDetailsComponent', () => {
  let component: CellarDetailsComponent;
  let fixture: ComponentFixture<CellarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellarDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
