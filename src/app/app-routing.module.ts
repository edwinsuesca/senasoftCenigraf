import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'newGame', component:NewGameComponent},
  {path: 'game', component:GameComponent},
  {path: 'player', component:NewPlayerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
