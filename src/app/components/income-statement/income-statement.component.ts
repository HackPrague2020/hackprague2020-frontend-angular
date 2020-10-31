import { Component, OnInit } from '@angular/core';
import {StockDataService} from '../../services/stock-data/stock-data.service';

@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css']
})
export class IncomeStatementComponent implements OnInit {
  sample_data: any;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
    this.stockDataService.getIncomeStatement('AAPL', 'quarter', 10).subscribe(data => {
      console.log(data);
      this.sample_data = JSON.stringify(data);
    })
  }

}
