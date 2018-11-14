import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortActividadesComponent } from './resort-actividades.component';

describe('ResortActividadesComponent', () => {
  let component: ResortActividadesComponent;
  let fixture: ComponentFixture<ResortActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
