import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaWheelsComponent } from './tesla-wheels.component';

describe('TeslaWheelsComponent', () => {
  let component: TeslaWheelsComponent;
  let fixture: ComponentFixture<TeslaWheelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaWheelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
