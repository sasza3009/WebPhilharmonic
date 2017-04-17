import { ContactComponent } from './contact.component';
import { LegoSetsComponent } from './legoSets.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RepertoireComponent } from './repertoire.component';
import { LegoShopDetailsComponent } from './legoShopDetails.component';
import { RegisterComponent} from './register.component';
import { ForgetComponent} from './forget.component';
import { ForgottenSendComponent} from './forgottenSend.component';
import { CalendarComponent} from './calendar.component';
import { TicketsComponent} from './tickets.component';
import { GalleryComponent} from './gallery.component';
import { GameComponent} from './game.component';





const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    
    {
        path: 'contact',
        component: ContactComponent
    },
    
    {
        path: 'repertoire',
        component: RepertoireComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

     {
        path: 'forgottenPassword',
        component: ForgetComponent
    },
    {
        path: 'forgottenSend',
        component: ForgottenSendComponent
    },
    {
        path: 'tickets',
        component: TicketsComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
     {
        path: 'game',
        component: GameComponent
    }

];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
