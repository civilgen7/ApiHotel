import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodasOccidentalesComponent } from './bodas-occidentales.component';

describe('BodasOccidentalesComponent', () => {
  let component: BodasOccidentalesComponent;
  let fixture: ComponentFixture<BodasOccidentalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodasOccidentalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodasOccidentalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
