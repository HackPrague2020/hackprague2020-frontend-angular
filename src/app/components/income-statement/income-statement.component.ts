import { Component, OnInit } from '@angular/core';
import {StockDataService} from '../../services/stock-data/stock-data.service';

@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css']
})
export class IncomeStatementComponent implements OnInit {
  incomeStatement: any;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {

  }

  getIncomeInfo(){
    this.stockDataService.getIncomeStatement('AAPL', 'quarter', 10).subscribe(data => {
      console.log(JSON.stringify(data));
    })
  }

}
