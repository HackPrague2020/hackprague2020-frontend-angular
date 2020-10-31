import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {StockDataService} from '../../services/stock-data/stock-data.service';

@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css']
})
export class IncomeStatementComponent implements OnInit {
  @Input() ticker:string;
  @Input() quarterIndex:number;
  @Output() lengthEvent = new EventEmitter<number>();
  revenue = 0;
  costOfRevenue = 0;
  operatingIncome = 0;
  interestExpense = 0;
  grossProfit = 0;
  otherExpenses = 0;
  netIncome = 0;
  statementsLength = 0;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.updateCurrentIncomeStatement();
  }

  updateCurrentIncomeStatement(absoluteValues?:boolean){
    this.stockDataService.getIncomeStatement(this.ticker, 'quarter', 10).subscribe(dataStatement => {
      let {revenue,costOfRevenue,operatingIncome,interestExpense,grossProfit,netIncome,weightedAverageShsOutDil:shares} = dataStatement[this.quarterIndex];
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
        //@ts-ignore
        this.statementsLength = dataStatement?.length;
        this.lengthEvent.emit(this.statementsLength);
      });
    });
  }
}
