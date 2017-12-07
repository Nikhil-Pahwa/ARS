import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderService {
    public logo = new BehaviorSubject('Logo');

    constructor() { }

    setLogo(logoUrl: string) {
        this.logo.next(logoUrl);
    }
}

