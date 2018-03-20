import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaBatteryComponent } from './tesla-battery.component';

describe('TeslaBatteryComponent', () => {
  let component: TeslaBatteryComponent;
  let fixture: ComponentFixture<TeslaBatteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaBatteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
