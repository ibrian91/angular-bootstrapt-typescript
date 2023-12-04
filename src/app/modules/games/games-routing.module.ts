import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './pages/game/game.component';
import { EditGamesComponent } from './pages/edit-games/edit-games.component';


const routes: Routes = [
  { path: '', component: GamesListComponent },
  { path: ':id', component: GameComponent },
  { path: ':id/modificar', component: EditGamesComponent },
  { path: '', component: GamesListComponent },
  { path: '**', redirectTo:'/empleados', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
