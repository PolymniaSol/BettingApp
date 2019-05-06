import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventsComponent } from './events/events.component';
import { SlipComponent } from './slip/slip.component';
import { FootballEventComponent } from './football-event/football-event.component';
import { MarketComponent } from './market/market.component';
import { OddComponent } from './odd/odd.component';
import { NumPadComponent } from './num-pad/num-pad.component';
import { SelectionComponent } from './selection/selection.component';
import { NumNotRoundPipe } from './slip/noRound.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EventsComponent,
    SlipComponent,
    FootballEventComponent,
    MarketComponent,
    OddComponent,
    NumPadComponent,
    SelectionComponent,
    NumNotRoundPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
