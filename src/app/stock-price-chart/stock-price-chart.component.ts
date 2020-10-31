import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { lineGraphColors, lineGraphOptionsDefaults } from '../utils/graph-defaults'

@Component({
  selector: 'app-stock-price-chart',
  templateUrl: './stock-price-chart.component.html',
  styleUrls: ['./stock-price-chart.component.css']
})
export class StockPriceChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    {
      data: [0, 10, 65, 59, 80, 81, 56, 55, 40, 32, 45, 76, 45, 23, 12, 67, 78, 89, 12], 
      label: 'TSLA',
      lineTension: 0.2,
    },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    tooltips: { intersect: false },
    scales: {
      yAxes: [{ display: false }],
      xAxes: [{ display: false }]
    },
    layout: { padding: 5 },
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartColors: Color[] = lineGraphColors;
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
