import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    readonly isAuthenticated$: Observable<boolean>;

    constructor() {
        this.isAuthenticated$ = of(true);
    }
}
