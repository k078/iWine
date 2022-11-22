import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarUpdateComponent } from './cellar-update.component';

describe('CellarUpdateComponent', () => {
  let component: CellarUpdateComponent;
  let fixture: ComponentFixture<CellarUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellarUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
