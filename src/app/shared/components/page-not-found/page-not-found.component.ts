import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../../constants/app-routes';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {

    appRoutes = AppRoutes;

    constructor() { }

    ngOnInit(): void {
    }
}
