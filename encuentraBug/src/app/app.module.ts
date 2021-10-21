import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { StartComponent } from './components/start/start.component';
import { NewGameComponent } from './components/new-game/new-game.component'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StartComponent,
    NewGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
