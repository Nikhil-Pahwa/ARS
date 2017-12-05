import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FlightService } from '../';
import { Flight } from '../../../shared/resources/';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css'],
  providers: [FlightService]
})
export class FlightDetailComponent implements OnInit {

  public flight: Flight;

  constructor(private route: ActivatedRoute, private router: Router, private flightService: FlightService) { }

  ngOnInit() {
    let fid = this.route.snapshot.paramMap.get('fid');
    this.flightService.getFlightResults()
      .subscribe((data: Flight[]) => {
        this.flight = data.filter(d => (d.flightId == fid))[0];
        console.log(this.flight);
      });
  }

}
