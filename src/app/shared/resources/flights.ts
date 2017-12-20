export interface RemoteFare {
    grossamount: number;
}

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
    destination: string;
    styleUrl: string;
    fare: RemoteFare;
    carrierId: string;
    depdate: string;
    departureAirport: string;
    arrivalAirport: string;
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
    destination: string;
    styleUrl: string;
    fare: number;
    carrierId: string;
    depDate: string;
    departureAirport: string;
    arrivalAirport: string;
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
        public flightId: string,
        public destination: string,
        public styleUrl: string,
        public fare: number,
        public carrierId: string,
        public depDate: string,
        public departureAirport: string,
        public arrivalAirport: string
    ) {
    }
}

export function FlightFromRemote(flight: RemoteFlight): Flight {
    return new Flight(flight.origin, flight.deptime, flight.duration,
        flight.flightno, flight.airline, flight.arrtime, flight.stops,
        flight.logoUrl, flight.fid, flight.destination, flight.styleUrl,
        flight.fare.grossamount, flight.carrierId,
        flight.depdate, flight.departureAirport, flight.arrivalAirport);
}

