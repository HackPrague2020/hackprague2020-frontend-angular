import { Component } from '@angular/core';

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
  mode = "rel";

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
