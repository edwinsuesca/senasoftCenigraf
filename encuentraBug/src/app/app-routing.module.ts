import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path: '', component:NewGameComponent},
  {path: 'newGame', component:NewGameComponent},
  {path: 'start', component:StartComponent},
  {path: 'game', component:GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
