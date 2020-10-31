import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  baseUrl = 'https://financialmodelingprep.com/api/v3/';
  key = '80052a37cc19b8e06a2018b9f0dfa01b';

  constructor(private http: HttpClient) { }

  getProfile(symbol: string){
    return this.http.get(`${this.baseUrl}/profile/${symbol}?apikey=${this.key}`)
  }

  getCompanyQuote(symbol: string){
    return this.http.get(`${this.baseUrl}/quote/${symbol}?apikey=${this.key}`)
  }

  getStockPrice(symbol: string) {
    return this.http.get(`${this.baseUrl}/historical-price-full/${symbol}?apikey=${this.key}&serietype=line`)
  }

  // period in ['quarter']
  getIncomeStatement(symbol: string, period: string, limit: number){
    return this.http.get(`${this.baseUrl}/income-statement/${symbol}?period=${period}&limit=${limit}&apikey=${this.key}`)
  }
}
