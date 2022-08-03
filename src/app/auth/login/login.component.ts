import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../../shared/constants/app-routes';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    appRoutes = AppRoutes;

    constructor() { }

    ngOnInit(): void {
    }
}
