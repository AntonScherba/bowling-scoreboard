import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PinsComponent } from './components/pins/pins.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { RollTypePipe } from './pipes/roll-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PinsComponent,
    ScoreboardComponent,
    RollTypePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
