import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Flight, Carriers } from '../../resources';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss']
})
export class FlightFilterComponent implements OnInit, OnChanges {

  @Input() flights: Flight[];

  constructor() { }

  ngOnInit() {
    console.log(this.flights);
  }

  ngOnChanges() {
    console.log(this.flights);
    this.filterAirways();
  }

  filterAirways() {
    let AICount = 0;
    let JACount = 0;
    this.flights.forEach((flight) => {
      switch (flight.airline.toUpperCase()) {
        case Carriers.AI: AICount++;
          break;
        case Carriers.JA: JACount++;
          break;
        default: console.log('Invalid carrier type');
      }
    });

    console.log(AICount);
    console.log(JACount);
  }
}
