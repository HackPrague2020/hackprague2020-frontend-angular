import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { IncomeStatementComponent } from './components/income-statement/income-statement.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {ChartsModule} from 'ng2-charts';
import { StockPriceChartComponent } from './stock-price-chart/stock-price-chart.component'
import {LemonadeDiagramComponent} from './components/lemonade-diagram/lemonade-diagram.component';
import { SearchComponent } from './components/search/search.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PerformanceRadarChartComponent } from './components/performance-radar-chart/performance-radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LemonadeDiagramComponent,
    IncomeStatementComponent,
    StockPriceChartComponent,
    SearchComponent,
    PerformanceRadarChartComponent,
    ShortNumberPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    ChartsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
