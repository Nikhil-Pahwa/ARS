export interface RemoteFlight {
    origin: string;
    deptime: string;
    duration: string;
    flightno: number;
    airline: string;
    arrtime: string;
    stops: number;
    logoUrl: string;
    fid: string;
}

export interface Flight {
    origin: string;
    deptime: string;
    duration: string;
    flightno: number;
    airline: string;
    arrtime: string;
    stops: number;
    logoUrl: string;
    flightId: string;
}

export class Flight implements Flight {
    constructor(
        public origin: string,
        public deptime: string,
        public duration: string,
        public flightno: number,
        public airline: string,
        public arrtime: string,
        public stops: number,
        public logoUrl: string,
        public flightId: string
    ) {
    }
}

export function FlightFromRemote(flight: RemoteFlight): Flight {
    return new Flight(flight.origin, flight.deptime, flight.duration,
        flight.flightno, flight.airline, flight.arrtime, flight.stops, flight.logoUrl, flight.fid);
}

