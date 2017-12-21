import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Language } from 'angular-l10n';

import 'rxjs/add/operator/switchMap';

import { FlightService } from '../flight.service';
import { Flight, EmptyFlight } from '../../../shared/resources/';
import { HeaderService } from '../../../shared/components/';

@Component({
  selector: 'flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss'],
  providers: [FlightService]
})

export class FlightDetailComponent implements OnInit, OnDestroy {

  @Language() lang;

  public flight: Flight = EmptyFlight;

  constructor(private route: ActivatedRoute, private router: Router,
    private flightService: FlightService, private headerService: HeaderService) { }

  ngOnInit() {
    let fid = this.route.snapshot.paramMap.get('fid');
    this.flightService.getFlightResults()
      .subscribe((data: Flight[]) => {
        this.flight = data.filter(d => (d.flightId.toString() === fid))[0];
        this.loadCSS(this.flight.styleUrl);
        this.headerService.setLogo(this.flight.logoUrl);
      });
  }

  private loadCSS(url) {
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
    let isAlreadyLoaded = false;
    for (let i = 0; i < links.length; i++) {
      let node = links[i];
      if (node.href.indexOf(link.href) > -1) {
        isAlreadyLoaded = true;
      }
    }

    if (isAlreadyLoaded) {
      return;
    } else {
      head.appendChild(link);
    }
  }

  ngOnDestroy() {
    let el = document.getElementById('temp');
    el.remove();
  }
}
