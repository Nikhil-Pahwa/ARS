import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalizationModule, LocaleService, LocaleConfig, LocaleStorage } from 'angular-l10n';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Filter } from '../../../shared/resources/';
import { FlightService } from '../flight.service';
import { FlightFilterComponent, HeaderService } from '../../../shared/components/';
import { FlightSearchComponent } from './flight-search.component';

let dummyFlights = [{
  'origin': 'DEL',
  'deptime': '13:20',
  'duration': '1h 15m',
  'airline': 'Air India',
  'arrtime': '',
  'stops': 0,
  'logoUrl': 'assets/images/airlines/AI_sq.svg',
  'flightno': 4,
  'flightId': 'AI',
  'destination': 'UDR',
  'styleUrl': 'assets/css/external_domain_styles/air_india.css',
  'fare': 4886,
  'carrierId': 'AI',
  'depDate': '12/21/2020',
  'TravelTime': '',
  'departureAirport': 'Indira Gandhi Intl.',
  'arrivalAirport': 'Dabok'
},
{
  'origin': 'DEL',
  'deptime': '13:20',
  'duration': '1h 15m',
  'airline': 'Jet Airways',
  'arrtime': '',
  'stops': 0,
  'logoUrl': 'assets/images/airlines/JA_sq.svg',
  'flightno': 4,
  'flightId': 'JA',
  'destination': 'UDR',
  'styleUrl': 'assets/css/external_domain_styles/air_india.css',
  'fare': 5000,
  'carrierId': 'AI',
  'depDate': '12/21/2020',
  'TravelTime': '',
  'departureAirport': 'Indira Gandhi Intl.',
  'arrivalAirport': 'Dabok'
}];

class MockFlightService {
  getFlightResults() {
    return Observable.of(dummyFlights);
  }
}

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchComponent, FlightFilterComponent],
      imports: [FormsModule, LocalizationModule.forChild(), RouterModule, HttpModule],
      providers: [HeaderService, LocaleService, LocaleConfig, LocaleStorage, { provide: FlightService, useClass: MockFlightService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search flights for valid inputs', () => {
    component.search = {
      'from': 'Lisbon',
      'to': 'Madrid',
      'journeyDate': '12/31/2025'
    };
    (document.getElementById('datepicker1') as HTMLInputElement).value = '12/31/2025';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component.searchFlights();
      expect(component.filteredList.length).toBe(2);
    });
  });

  it('should not search flights for any invalid input', () => {
    component.search = {
      'from': 'Lisbon',
      'to': 'Madrid',
      'journeyDate': '12/31/2025'
    };
    (document.getElementById('datepicker1') as HTMLInputElement).value = '12/31/2025';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component.searchFlights();
      expect(component.filteredList).toBeFalsy();
    });
  });

  it('should filter flight results based on filter', () => {
    let filters: Filter[] = [new Filter('Air India', 'AI', null, true)];
    component.flightsList = dummyFlights;
    component.filterSearch(filters);
    expect(component.filteredList[0].carrierId).toBe('AI');
  });
});
