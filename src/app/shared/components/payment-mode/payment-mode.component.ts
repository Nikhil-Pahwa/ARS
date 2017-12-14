import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Language } from 'angular-l10n';

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['./payment-mode.component.scss']
})
export class PaymentModeComponent implements OnInit {

  @Language() lang;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  pay() {
    alert('Feature not implemented');
  }

}
