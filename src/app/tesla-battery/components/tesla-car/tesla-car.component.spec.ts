import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaCarComponent } from './tesla-car.component';

describe('TeslaCarComponent', () => {
  let component: TeslaCarComponent;
  let fixture: ComponentFixture<TeslaCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
