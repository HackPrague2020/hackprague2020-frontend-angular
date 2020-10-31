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
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
  ];
  public radarChartType: ChartType = 'radar';

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {

  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

