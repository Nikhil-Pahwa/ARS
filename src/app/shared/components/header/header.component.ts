import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logoUrl: string = '';

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.logo.subscribe(logo => {
      this.logoUrl = logo;
    });
  }

}
