import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=demo')
  }
}
