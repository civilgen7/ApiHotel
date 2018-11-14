import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodasComponent } from './bodas.component';

describe('BodasComponent', () => {
  let component: BodasComponent;
  let fixture: ComponentFixture<BodasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
