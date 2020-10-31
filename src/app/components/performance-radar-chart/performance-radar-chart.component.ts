import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {StockDataService} from '../../services/stock-data/stock-data.service';

@Component({
  selector: 'app-performance-radar-chart',
  templateUrl: './performance-radar-chart.component.html',
  styleUrls: ['./performance-radar-chart.component.css']
})
export class PerformanceRadarChartComponent implements OnInit {

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };


  // List of JSON keys can be found at https://financialmodelingprep.com/developer/docs/#Company-Financial-Ratios
  public  radarChartConfigs = [
    {
      label: 'Price-Earnings Ratio',
      jsonKey: 'peRatioTTM'
    },
    {
      label: 'Price to Sales Ratio',
      jsonKey: 'priceToSalesRatioTTM'
    },
    {
      label: 'Debt to Equity Ratio',
      jsonKey: 'debtToEquityTTM'
    },
    {
      label: 'Payout Ratio',
      jsonKey: 'payoutRatioTTM'
    },
    {
      label: 'Revenue per Share',
      jsonKey: 'revenuePerShareTTM'
    }

  ];
  public radarChartLabels: Label[];

  public radarChartData: ChartDataSets[];
  public radarChartType: ChartType = 'radar';
  public dataLoaded: boolean = false;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
    let symbol = 'AAPL';
    this.stockDataService.getKeyMetrics(symbol).subscribe(data => {
      let financialRatios = data[0];
      this.radarChartData = [{
        data: [],
        label: symbol
      }];

      this.radarChartLabels = [];

      this.radarChartConfigs.forEach(config => {
        this.radarChartData[0].data.push(financialRatios[config.jsonKey]);
        this.radarChartLabels.push(config.label);
      });

      this.dataLoaded = true;

    })

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

