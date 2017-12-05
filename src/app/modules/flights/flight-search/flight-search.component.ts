import { Component, OnInit } from '@angular/core';
import { FlightService } from '../';
import { Flight } from '../../../shared/resources/';

declare let jQuery: any;

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  public flightsList: Flight[];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    jQuery('#datepicker1').datepicker();
  }

  searchFlights() {
    this.flightService.getFlightResults()
      .subscribe((data: Flight[]) => {
        this.flightsList = data;
      });
  }

}
