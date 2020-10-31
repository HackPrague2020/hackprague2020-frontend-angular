import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPriceChartComponent } from './stock-price-chart.component';

describe('StockPriceChartComponent', () => {
  let component: StockPriceChartComponent;
  let fixture: ComponentFixture<StockPriceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPriceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPriceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
