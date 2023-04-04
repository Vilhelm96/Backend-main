import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { SeePlayersComponent } from './components/see-players/see-players.component';

const routes: Routes = [
  {path: 'add-players', component: AddPlayerComponent},
  {path: 'see-players', component: SeePlayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AddPlayerComponent, SeePlayersComponent]