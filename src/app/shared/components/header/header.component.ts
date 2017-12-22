import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Language } from 'angular-l10n';

import { HeaderService } from './header.service';

@Component({
  selector: 'ars-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  @Language() lang;

  public logoUrl: string = '';

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.logo.subscribe(logo => {
      this.logoUrl = logo;
    });
  }
}
