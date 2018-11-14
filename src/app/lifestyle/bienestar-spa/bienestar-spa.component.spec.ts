import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienestarSpaComponent } from './bienestar-spa.component';

describe('BienestarSpaComponent', () => {
  let component: BienestarSpaComponent;
  let fixture: ComponentFixture<BienestarSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienestarSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienestarSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
