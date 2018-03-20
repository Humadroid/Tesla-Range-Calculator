import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaStatsComponent } from './tesla-stats.component';

describe('TeslaStatsComponent', () => {
  let component: TeslaStatsComponent;
  let fixture: ComponentFixture<TeslaStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
