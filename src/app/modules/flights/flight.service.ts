import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FlightService {
    constructor(
        private http: Http
    ) { }

    getFlightResults() {
        return this.http.get('../../assets/json/flight-search-results.json')
            .map(res => res.json());
    }

}
