import {HttpModule} from '@angular/http';
import { LegoSetsComponent } from './legoSets.component';
import { ContactComponent } from './contact.component';
import { LegoSetService } from './legoSet.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, HttpModule],
    declarations: [LegoSetsComponent, ContactComponent],
    exports: [],
    providers: [LegoSetService]
})
export class LegoModule {
}
