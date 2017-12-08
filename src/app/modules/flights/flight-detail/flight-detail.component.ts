import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Language } from 'angular-l10n';

import { FlightService } from '../';
import { Flight } from '../../../shared/resources/';
import { HeaderService } from '../../../shared/components/';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss'],
  providers: [FlightService],
  encapsulation: ViewEncapsulation.None
})
export class FlightDetailComponent implements OnInit, OnDestroy {

  @Language() lang;

  public flight: Flight;

  constructor(private route: ActivatedRoute, private router: Router,
    private flightService: FlightService, private headerService: HeaderService) { }

  ngOnInit() {
    let fid = this.route.snapshot.paramMap.get('fid');
    this.flightService.getFlightResults()
      .subscribe((data: Flight[]) => {
        this.flight = data.filter(d => (d.flightId == fid))[0];
        console.log(this.flight);
        this.loadCSS(this.flight.styleUrl);
        this.headerService.setLogo(this.flight.logoUrl);
      });
  }


  loadCSS(url) {
    // Create link
    let link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.id = 'temp';

    let head = document.getElementsByTagName('head')[0];
    let links = head.getElementsByTagName('link');
    let style = head.getElementsByTagName('style')[0];

    // Check if the same style sheet has been loaded already.
    let isLoaded = false;
    for (var i = 0; i < links.length; i++) {
      var node = links[i];
      if (node.href.indexOf(link.href) > -1) {
        isLoaded = true;
      }
    }
    if (isLoaded) return;
    //head.insertBefore(link, style);
    head.appendChild(link);
  }

  ngOnDestroy() {
    let el = document.getElementById('temp');
    el.remove();
  }


}
