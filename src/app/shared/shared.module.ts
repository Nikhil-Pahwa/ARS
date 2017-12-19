import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslationModule, LocaleService, TranslationService, LocalizationModule } from 'angular-l10n';
import { HeaderComponent } from './components/';
import { PaymentModeComponent } from './components/payment-mode/payment-mode.component';
import { FlightFilterComponent } from './components/flight-filter/flight-filter.component';

@NgModule({
    declarations: [HeaderComponent, PaymentModeComponent, FlightFilterComponent],
    exports: [HeaderComponent, FlightFilterComponent],
    imports: [
        BrowserModule,
        FormsModule,
        // Translation
        TranslationModule.forRoot(),
        LocalizationModule.forRoot()
    ]
})
export class SharedModule { }
