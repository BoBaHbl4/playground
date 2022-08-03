import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../shared/constants/app-routes';

@Component({
    selector: 'app-main-board',
    templateUrl: './main-board.component.html',
    styleUrls: ['./main-board.component.scss'],
})
export class MainBoardComponent implements OnInit {

    appRoutes = AppRoutes;

    constructor() { }

    ngOnInit(): void {
    }
}
