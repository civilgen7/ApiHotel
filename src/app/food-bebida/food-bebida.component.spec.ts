import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBebidaComponent } from './food-bebida.component';

describe('FoodBebidaComponent', () => {
  let component: FoodBebidaComponent;
  let fixture: ComponentFixture<FoodBebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
