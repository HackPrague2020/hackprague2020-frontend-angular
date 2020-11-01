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
import { LimoSvgComponent } from './components/limo-svg/limo-svg.component';
import { LemonComponent } from './components/lemon/lemon.component';
import { LemonadeStandSvgComponent } from './components/lemonade-stand-svg/lemonade-stand-svg.component';
import { BankSvgComponent } from './components/bank-svg/bank-svg.component';
import { RightArrowSvgComponent } from './components/right-arrow-svg/right-arrow-svg.component';
import { RightDownArrowSvgComponent } from './components/right-down-arrow-svg/right-down-arrow-svg.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AbsPipe } from './abs.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LemonadeDiagramComponent,
    IncomeStatementComponent,
    StockPriceChartComponent,
    SearchComponent,
    PerformanceRadarChartComponent,
    ShortNumberPipe,
    LimoSvgComponent,
    LemonComponent,
    LemonadeStandSvgComponent,
    BankSvgComponent,
    RightArrowSvgComponent,
    RightDownArrowSvgComponent,
    AbsPipe
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
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
