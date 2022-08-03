import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../shared/constants/app-routes';
import { MainBoardComponent } from './main-board.component';
import { PanelComponent } from './panel/panel.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
    {
        path: AppRoutes.MAIN_BOARD,
        component: MainBoardComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: AppRoutes._HOME,
            },
            {
                path: AppRoutes._HOME,
                component: PanelComponent,
            },
            {
                path: AppRoutes._STATS,
                component: StatsComponent,
            },
            {
                path: '**',
                redirectTo: AppRoutes.fromRoot(AppRoutes.PAGE_404),
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class MainBoardRoutingModule {}
