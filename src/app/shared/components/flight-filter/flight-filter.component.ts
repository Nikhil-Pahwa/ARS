import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Flight, Carriers, Filter } from '../../resources';

@Component({
  selector: 'app-flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss']
})
export class FlightFilterComponent implements OnInit, OnChanges {

  @Input() flights: Flight[];
  public flightFilter: Filter[] = [];
  constructor() { }

  ngOnInit() {
    console.log(this.flights);
    // this.flightFilter.push(new Filter('Air India', 'AI', 21));
    // this.flightFilter.push(new Filter('Jet Airways', 'JA', 10));
  }

  ngOnChanges() {
    this.filterAirways();
  }

  filterAirways() {
    this.flights.forEach((flight) => {
      let obj = {};

      // if (this.flightFilter[0].id === flight.carrierId) {
      //   this.flightFilter.push(new Filter(flight.airline, flight.carrierId, null));
      // }

      let dd = this.flightFilter.filter((ff) => {
        return ff.id === flight.carrierId;
      });

      if (!dd.length) {
        this.flightFilter.push(new Filter(flight.airline, flight.carrierId, null));
      }

      //  let airlines = new Map<string, any>();
      //   switch (cd) {
      //     case 'AI': airlines.set(Carriers.AI.count, (airlines.get(Carriers.AI.count))++);
      //       break;
      //     case 'JA': airlines.set(Carriers.JA, airlines.get(Carriers.JA)++);
      //       break;  
      //     default: break;
      //   }
    });
  }
}
