import { NgModule } from '@angular/core';
import { TranslationModule, LocaleService, TranslationService, LocalizationModule } from 'angular-l10n';
import { HeaderComponent } from './components/';
import { PaymentModeComponent } from './components/payment-mode/payment-mode.component';

@NgModule({
    declarations: [HeaderComponent, PaymentModeComponent],
    exports: [HeaderComponent],
    imports: [
        // Translation
        TranslationModule.forRoot(),
        LocalizationModule.forRoot()
    ]
})
export class SharedModule { }
