import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TranslationModule, LocaleService, TranslationService, LocalizationModule } from 'angular-l10n';

import { AppComponent } from './app.component';
import { FlightDetailComponent, FlightSearchComponent } from './modules/flights/';
import { PaymentModeComponent } from './shared/components/payment-mode/payment-mode.component';
import { SharedModule } from './shared/shared.module';
import { HeaderService } from './shared/components/header';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: FlightSearchComponent },
  { path: 'detail/:fid', component: FlightDetailComponent },
  { path: 'payment/:fid', component: PaymentModeComponent },
  { path: '**', redirectTo: '/search' }
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
    FormsModule,
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
