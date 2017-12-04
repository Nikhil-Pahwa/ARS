import { Component, OnInit } from '@angular/core';
import { FlightService } from '../';
import { Flight } from '../../../shared/resources/';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  private flightsList: Flight[];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

  searchFlights() {
    this.flightService.getFlightResults()
      .subscribe((data: Flight[]) => {
        this.flightsList = data;
      });
  }

}
