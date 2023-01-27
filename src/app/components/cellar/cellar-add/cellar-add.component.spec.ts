import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarAddComponent } from './cellar-add.component';

describe('CellarAddComponent', () => {
  let component: CellarAddComponent;
  let fixture: ComponentFixture<CellarAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellarAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
