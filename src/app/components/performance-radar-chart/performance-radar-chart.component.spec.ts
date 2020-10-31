import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceRadarChartComponent } from './performance-radar-chart.component';

describe('PerformanceRadarChartComponent', () => {
  let component: PerformanceRadarChartComponent;
  let fixture: ComponentFixture<PerformanceRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
