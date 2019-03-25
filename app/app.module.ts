import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot([
      {
         path: 'hotel',component:HotelComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent,HotelComponent]
})
export class AppModule { }
