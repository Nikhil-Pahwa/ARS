import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Language } from 'angular-l10n';

@Component({
  selector: 'payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['./payment-mode.component.scss']
})

export class PaymentModeComponent {

  @Language() lang;

  constructor(private location: Location) { }

  back() {
    this.location.back();
  }

  pay() {
    alert('Feature not implemented');
  }

}
