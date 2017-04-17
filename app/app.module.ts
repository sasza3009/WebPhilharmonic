import { LegoShopService } from './legoShop.service';
import { AppRoutingModule } from './app-routing.module';
import { LegoModule } from './lego.module';
import { LegoShopModule } from './legoShop.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register.component';
import { ForgetComponent } from './forget.component';
import { FormsModule } from '@angular/forms';
import { ForgottenSendComponent } from './forgottenSend.component';
//import { HttpModule } from '@angular/http';
import { CalendarComponent } from './calendar.component';
import { TicketsComponent } from './tickets.component';
import { GalleryComponent } from './gallery.component';
import { GameComponent } from './game.component';


@NgModule({
  imports:
  [
        BrowserModule, 
        LegoModule, 
        LegoShopModule, 
        AppRoutingModule, 
        FormsModule
  //,  
  //HttpModule
  ],
  declarations: 
  [
        AppComponent, 
        RegisterComponent,
        ForgetComponent,  
        ForgottenSendComponent,
        CalendarComponent, 
        TicketsComponent, 
        GalleryComponent,
        GameComponent

        ],
  bootstrap: [AppComponent],
  providers: [LegoShopService
  //, 
     
        ]
})
export class AppModule {
}
