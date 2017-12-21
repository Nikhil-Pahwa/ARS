import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalizationModule, LocaleService, LocaleConfig, LocaleStorage } from 'angular-l10n';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FlightService } from '../flight.service';
import { FlightFilterComponent, HeaderService } from '../../../shared/components/';
import { FlightSearchComponent } from './flight-search.component';

class MockFlightService {
  getFlightResults() {
    return Observable.of([]);
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
});
