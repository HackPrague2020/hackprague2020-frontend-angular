import { Component, OnInit,Input } from '@angular/core';
import {ChartDataSets, ChartType, RadialChartOptions,Chart} from 'chart.js';
import {Label} from 'ng2-charts';
import {StockDataService} from '../../services/stock-data/stock-data.service';

@Component({
  selector: 'app-performance-radar-chart',
  templateUrl: './performance-radar-chart.component.html',
  styleUrls: ['./performance-radar-chart.component.css']
})
export class PerformanceRadarChartComponent implements OnInit {
  @Input() ticker:string;

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,

      scale:{
        ticks:{
          display:false
        }
      }

  };


  // List of JSON keys can be found at https://financialmodelingprep.com/developer/docs/#Company-Financial-Ratios
  public  radarChartConfigs = [
    {
      label: 'Debt',
      jsonKey: 'debtToEquityTTM'
    },
    {
      label: 'Current Debt',
      jsonKey: 'currentRatioTTM'
    },
    {
      label: 'Equity',
      jsonKey: 'priceToBookRatioTTM'
    }
  ];
  public radarChartLabels: Label[];

  public radarChartData: ChartDataSets[];
  public radarChartType: ChartType = 'radar';
  public dataLoaded: boolean = false;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void{
    Chart.defaults.global.legend.display = false;
    this.ngOnChanges();
  }
  ngOnChanges(): void {
    let symbol = this.ticker;
    this.stockDataService.getKeyMetrics(symbol).subscribe(data => {
      let financialRatios = data[0];
      this.radarChartData = [{
        data: [],
        label: symbol
      }];

      let keyMetrics = data[0];
      console.log('keyMetrics');
      console.log(keyMetrics);

      this.stockDataService.getFinancialRatios(symbol).subscribe(data2 => {

      let financialRatios = data2[0];
        this.radarChartData = [{
          data: [],
          label: symbol
        }];

        let _ = this.radarChartData[0].data;
        this.radarChartLabels = [];

        let config = this.radarChartConfigs;
        _.push(Math.log(1+keyMetrics[config[0].jsonKey]));
        this.radarChartLabels.push(config[0].label);

        _.push(Math.log(1+keyMetrics[config[1].jsonKey]));
        this.radarChartLabels.push(config[1].label);

        _.push(Math.log(1+financialRatios[config[2].jsonKey]));
        this.radarChartLabels.push(config[2].label);

        this.dataLoaded = true;
      });

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

