import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Language } from 'angular-l10n';

@Component({
  selector: 'ars-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
