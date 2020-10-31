import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { lineGraphColors, lineGraphOptionsDefaults } from '../utils/graph-defaults'
import {StockDataService} from '../services/stock-data/stock-data.service';

@Component({
  selector: 'app-stock-price-chart',
  templateUrl: './stock-price-chart.component.html',
  styleUrls: ['./stock-price-chart.component.css']
})
export class StockPriceChartComponent implements OnInit, OnChanges {

  @Input() ticker: string;
  @Input() quarterIndex: number;
  @Input() formatQuarter;
  @Output() sliderValueChange = new EventEmitter<any>();

  numOfQuarters = 23;


  onSliderChange(newIndex){
    this.quarterIndex = this.numOfQuarters - newIndex;
    let closePrices = this.lineChartData[0]["data"];
    let numOfDays = closePrices.length;
    let daysPerQuarter = Math.floor(numOfDays / this.numOfQuarters);
    let dayIndex = (numOfDays - daysPerQuarter * this.quarterIndex) - 1;
    console.log(dayIndex);
    this.sliderValueChange.emit(closePrices[dayIndex])
  }


  public lineChartData: ChartDataSets[] = [
    {
      data: [],
      label: this.ticker,
      lineTension: 0.2,
    },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    tooltips: { intersect: false },
    scales: {
      yAxes: [{ display: false }],
      xAxes: [{ display: false }]
    },
    elements: {
      point:{
          radius: 0
      }
    },
    layout: { padding: 10 },
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartColors: Color[] = lineGraphColors;
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private stockDataService: StockDataService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.stockDataService.getStockPrice(this.ticker).subscribe(data => {
      this.lineChartLabels = [];
      this.lineChartData[0].data = [];
      for (const day of data["historical"].slice(0, 365*5).reverse()) {
        if (parseInt(day.date.slice(0, 4)) < 2015) continue;
        this.lineChartData[0]["data"].push(day.close);
        this.lineChartLabels.push(day.date);
      }
      this.sliderValueChange.emit(this.lineChartData[0]["data"][this.lineChartData[0]["data"].length - 1])
    });
  }

}
