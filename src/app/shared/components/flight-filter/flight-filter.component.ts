import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Language } from 'angular-l10n';

import { Flight, Filter } from '../../resources';

@Component({
  selector: 'flight-filter',
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.scss']
})
export class FlightFilterComponent implements OnChanges {

  @Language() lang;

  @Input() flights: Flight[];
  @Output() selectionChanged: EventEmitter<Filter[]> = new EventEmitter<Filter[]>();

  public flightFilter: Filter[] = [];

  constructor() { }

  ngOnChanges() {
    this.filterAirways();
  }

  filterChanged() {
    this.selectionChanged.emit(this.flightFilter);
  }

  private filterAirways() {
    this.flights.forEach((flight) => {
      let dd = this.flightFilter.filter((ff) => {
        return ff.id === flight.carrierId;
      });
      if (!dd.length) {
        this.flightFilter.push(new Filter(flight.airline, flight.carrierId, null, true));
      }
    });
  }
}
