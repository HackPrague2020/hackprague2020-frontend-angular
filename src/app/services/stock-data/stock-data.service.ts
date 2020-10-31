import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  // Example calls at https://financialmodelingprep.com/developer/docs/
  baseUrl = 'https://financialmodelingprep.com/api/v3';

  constructor(private http: HttpClient) { }

  getProfile(symbol: string){
    return this.http.get(`${this.baseUrl}/profile/${symbol}?apikey=demo`)
  }

  getCompanyQuote(symbol: string){
    return this.http.get(`${this.baseUrl}/quote/${symbol}?apikey=demo`)
  }

  // period in ['quarter']
  getIncomeStatement(symbol: string, period: string, limit: number){
    return this.http.get(`${this.baseUrl}/income-statement/${symbol}?period=${period}&limit=${limit}&apikey=demo`)
  }




}
