import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TranslationModule, LocaleService, TranslationService, LocalizationModule } from 'angular-l10n';

import { AppComponent } from './app.component';
import { FlightDetailComponent } from './modules/flights/flight-detail/flight-detail.component';
import { FlightSearchComponent } from './modules/flights/flight-search/flight-search.component';
import { SharedModule } from './shared/shared.module';
import { HeaderService } from './shared/components/header';

const appRoutes: Routes = [
  { path: 'search', component: FlightSearchComponent },
  { path: 'detail/:fid', component: FlightDetailComponent }
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
    HttpModule,
    SharedModule,

    // Translation
    TranslationModule.forRoot(),
    LocalizationModule.forRoot(),
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public locale: LocaleService, public translation: TranslationService) {
    this.locale.addConfiguration()
      .addLanguages(['en', 'ru'])
      .defineLanguage('en');
    this.locale.init();

    this.translation
      .addConfiguration()
      .addProvider('./assets/translations/locale-');

    this.translation.init();
  }
}
