import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {StockDataService} from '../../services/stock-data/stock-data.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-income-statement',
  templateUrl: './income-statement.component.html',
  styleUrls: ['./income-statement.component.css']
})
export class IncomeStatementComponent implements OnInit {
  @Input() ticker:string;
  @Input() quarterIndex:number;
  @Input() absoluteValues:boolean;
  @Input() selectedStockPrice:number;
  @Output() lengthEvent = new EventEmitter<number>();
  changeEvents : Subject<string> = new Subject();
  revenue = 0;
  costOfRevenue = 0;
  operatingIncome = 0;
  interestExpense = 0;
  grossProfit = 0;
  otherExpenses = 0;
  netIncome = 0;
  statementsLength = 0;
  administrativeExpense = 0;
  dividendsAndBuybacks = 0;
  capex = 0;

  constructor(private stockDataService: StockDataService) { }

  ngOnInit(): void {
    this.changeEvents.pipe(debounceTime(200)).subscribe(event => this.updateCurrentIncomeStatement());
    this.updateCurrentIncomeStatement();
  }

  ngOnChanges(): void{
    this.changeEvents.next();
  }

  updateCurrentIncomeStatement(){
    this.stockDataService.getIncomeStatement(this.ticker, 'quarter', 25).subscribe(dataStatement => {
      this.stockDataService.getCashFlowStatement(this.ticker,'quarter',25).subscribe(cashStatement=>{
        let cash = cashStatement[0];
        let {revenue,costOfRevenue,operatingIncome,interestExpense,grossProfit,netIncome,weightedAverageShsOutDil:shares} = dataStatement[this.quarterIndex];
        this.stockDataService.getCompanyQuote(this.ticker).subscribe(dataPrice=>{
          let price = this.quarterIndex ? this.selectedStockPrice : dataPrice[0].price ;
          let marketCap = this.absoluteValues ? 1 : shares*price/100;
          this.revenue = revenue/marketCap;
          this.costOfRevenue = costOfRevenue/marketCap;
          this.grossProfit = (revenue-costOfRevenue)/marketCap;
          this.operatingIncome = operatingIncome/marketCap;
          this.otherExpenses = (this.grossProfit - this.operatingIncome);
          this.administrativeExpense = (operatingIncome - netIncome)/marketCap;
          this.interestExpense = interestExpense/marketCap;
          this.netIncome = netIncome/marketCap;
          this.capex = cash.capitalExpenditure/marketCap;
          this.dividendsAndBuybacks = (-cash.dividendsPaid-cash.commonStockRepurchased-cash.commonStockIssued)/marketCap;
          //@ts-ignore
          this.statementsLength = dataStatement?.length;
          this.lengthEvent.emit(this.statementsLength);
        });
      })
    });
  }

  scale(value) {
    return Math.abs(value/this.revenue)/2+0.5;
  }

  showTooltip(evt, text) {
    console.log(evt)
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = text;
    tooltip.style.display = "block";
    tooltip.style.left = evt.x + 10 + 'px';
    tooltip.style.top = evt.y + 10 + 'px';
  }
  
  hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
  }
}
