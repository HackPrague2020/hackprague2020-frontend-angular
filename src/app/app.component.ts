import { Component } from '@angular/core';
import {StockDataService} from './services/stock-data/stock-data.service';
import {tick} from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackprague2020-frontend-angular';
  quarterIndex = 0;
  tickers = ["GOOG", "AAPL", "INTC", "TSLA"];
  selectedTicker = "TSLA";
  companyName: string;
  companyDescription: string;

  selectedStockPrice: number;
  mode = "rel";

  constructor(private stockDataService: StockDataService) {
  }

  ngOnInit(){
    // set default ticker
    this.changeTicker(this.selectedTicker);
  }

  changeTicker(ticker){
    console.log("Changing ticker to ", ticker);
      this.selectedTicker = ticker;
      this.stockDataService.getProfile(this.selectedTicker).subscribe(profile => {
        this.companyName = profile[0]['companyName'];
        this.companyDescription = profile[0]['description']

      })
  }

  formatQuarter(quarter: number) {
    return Math.floor(15 + quarter / 4) + "Q" + (1 + (quarter % 4));
  }

  getReadableQuarter(quarter: number) {
    return this.formatQuarter(23 - this.quarterIndex);
  }

  logLength(event){
    console.log(event);
  }
}
