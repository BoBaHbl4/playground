import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBoardComponent } from './main-board.component';
import { SharedModule } from '../shared/shared.module';
import { MainBoardRoutingModule } from './main-board.-routing.module';
import { PanelComponent } from './panel/panel.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
    declarations: [
        MainBoardComponent,
        PanelComponent,
        StatsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainBoardRoutingModule,
    ],
})
export class MainBoardModule {}
