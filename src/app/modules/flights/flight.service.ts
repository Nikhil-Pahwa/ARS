import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RemoteFlight, FlightFromRemote, Flight } from '../../shared/resources/';

@Injectable()
export class FlightService {
    constructor(
        private http: Http
    ) { }

    getFlightResults() {
        return this.http.get('../../assets/json/flight-search-results.json')
            .map(res => res.json())
            .map(data => data.data.onwardflights)
            .map((remoteFlights: RemoteFlight[]) => {
                let flights: Flight[] = [];
                remoteFlights.forEach(flight => {
                    flights.push(FlightFromRemote(flight));
                });
                return flights;
            });
    }

}
