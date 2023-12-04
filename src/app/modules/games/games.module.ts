import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesFormComponent } from './components/games-form/games-form.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { CreateGamesComponent } from './pages/create-games/create-games.component';
import { EditGamesComponent } from './pages/edit-games/edit-games.component';
import { GameComponent } from './pages/game/game.component';


@NgModule({
  declarations: [
    GamesFormComponent,
    GamesListComponent,
    CreateGamesComponent,
    EditGamesComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
