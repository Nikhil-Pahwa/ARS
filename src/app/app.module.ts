import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightDetailComponent } from './modules/flights/flight-detail/flight-detail.component';
import { FlightSearchComponent } from './modules/flights/flight-search/flight-search.component';

const appRoutes: Routes = [
  { path: 'search', component: FlightSearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FlightDetailComponent,
    FlightSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
