import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaClimateComponent } from './tesla-climate.component';

describe('TeslaClimateComponent', () => {
  let component: TeslaClimateComponent;
  let fixture: ComponentFixture<TeslaClimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaClimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
