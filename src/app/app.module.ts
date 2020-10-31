import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { IncomeStatementComponent } from './components/income-statement/income-statement.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {ChartsModule} from 'ng2-charts';
import { StockPriceChartComponent } from './stock-price-chart/stock-price-chart.component'
import {LemonadeDiagramComponent} from './components/lemonade-diagram/lemonade-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    LemonadeDiagramComponent,
    IncomeStatementComponent,
    StockPriceChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
