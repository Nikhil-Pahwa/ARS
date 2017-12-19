import { Component, OnInit } from '@angular/core';
import { Language } from 'angular-l10n';

import { FlightService } from '../';
import { Flight, Filter } from '../../../shared/resources/';
import { HeaderService } from '../../../shared/components/';

declare let jQuery: any;

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  @Language() lang;

  public flightsList: Flight[];
  public filteredList: Flight[];

  constructor(private flightService: FlightService, private headerService: HeaderService) { }

  ngOnInit() {
    jQuery('#datepicker1').datepicker();
    this.headerService.setLogo('assets/images/ARS-logo.png');
  }

  searchFlights() {
    this.flightService.getFlightResults()
      .subscribe((data: Flight[]) => {
        this.flightsList = data;
        this.filteredList = data;
      });
  }

  filterSearch(filters: Filter[]) {
    this.filteredList = [];
    filters.forEach((filter: Filter) => {
      let items = this.flightsList.filter(function (flight) {
        return (filter.selected && (flight.carrierId === filter.id));
      });

      this.filteredList = this.filteredList.concat(items);

      this.filteredList.sort(function (a, b) {
        return a.fare - b.fare;
      });

    });
  }
}
