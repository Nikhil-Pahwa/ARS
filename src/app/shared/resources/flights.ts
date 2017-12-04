export interface RemoteFlight {
    origin: string;
    deptime: string;
    duration: string;
    flightno: number;
    airline: string;
}

export interface Flight {
    origin: string;
    deptime: string;
    duration: string;
    flightno: number;
    airline: string;
}

export class Flight implements Flight {
    constructor(
        public origin: string,
        public deptime: string,
        public duration: string,
        public flightno: number,
        public airline: string
    ) {
    }
}

export function FlightFromRemote(flight: RemoteFlight): Flight {
    return new Flight(flight.origin, flight.deptime, flight.duration, flight.flightno, flight.airline);
}
