import { Component, OnInit } from '@angular/core';
import { FlightService } from '../';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

  searchFlights() {
    this.flightService.getFlightResults()
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}
