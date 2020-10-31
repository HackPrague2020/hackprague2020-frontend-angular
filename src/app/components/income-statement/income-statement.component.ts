import { Component, OnInit } from '@angular/core';
import {StockDataService} from '../../services/stock-data/stock-data.service';

@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css']
})
export class IncomeStatementComponent implements OnInit {
  ticker = 'TSLA';
  revenue = 0;
  costOfRevenue = 0;
  operatingIncome = 0;
  interestExpense = 0;
  grossProfit = 0;
  otherExpenses = 0;
  netIncome = 0;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
    this.updateCurrentIncomeStatement();
  }


  updateCurrentIncomeStatement(absoluteValues?:boolean){
    this.stockDataService.getIncomeStatement(this.ticker, 'year', 1).subscribe(dataStatement => {
      let {revenue,costOfRevenue,operatingIncome,interestExpense,grossProfit,netIncome,weightedAverageShsOutDil:shares} = dataStatement[0];
      this.stockDataService.getCompanyQuote(this.ticker).subscribe(dataPrice=>{
        let price = dataPrice[0].price;
        let marketCap = absoluteValues ? 1 : shares*price;
        this.revenue = revenue/marketCap;
        this.costOfRevenue = costOfRevenue/marketCap;
        this.grossProfit = grossProfit/marketCap;
        this.otherExpenses = (grossProfit - operatingIncome)/marketCap;
        this.operatingIncome = operatingIncome/marketCap;
        this.interestExpense = interestExpense/marketCap;
        this.netIncome = netIncome/marketCap;
      });
    });
  }
}

/*ABSOLUTE VALUES
  updateCurrentIncomeStatement(symbol,){
    this.stockDataService.getIncomeStatement(symbol, 'year', 1).subscribe(data => {
      console.log(data[0]);
      let {revenue,costOfRevenue,operatingIncome,interestExpense,grossProfit,netIncome} = data[0];
      this.revenue = revenue;
      this.costOfRevenue = costOfRevenue;
      this.grossProfit = grossProfit;
      this.otherExpenses = grossProfit - operatingIncome;
      this.operatingIncome = operatingIncome;
      this.interestExpense = interestExpense;
      this.netIncome = netIncome;
    });
  }
*/