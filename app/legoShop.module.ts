import { RouterModule } from '@angular/router';
import { RepertoireComponent } from './repertoire.component';
import { LegoShopDetailsComponent } from './legoShopDetails.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [CommonModule, RouterModule, HttpModule],
    declarations: [RepertoireComponent, LegoShopDetailsComponent, DashboardComponent],
    exports: [],
    providers: []
})
export class LegoShopModule {
}
