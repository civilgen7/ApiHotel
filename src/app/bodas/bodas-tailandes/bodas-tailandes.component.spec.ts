import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodasTailandesComponent } from './bodas-tailandes.component';

describe('BodasTailandesComponent', () => {
  let component: BodasTailandesComponent;
  let fixture: ComponentFixture<BodasTailandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodasTailandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodasTailandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
