import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarListComponent } from './cellar-list.component';

describe('CellarListComponent', () => {
  let component: CellarListComponent;
  let fixture: ComponentFixture<CellarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellarListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
