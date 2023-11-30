import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesListComponent } from './modules/games/components/games-list/games-list.component';
import { GamesFormComponent } from './modules/games/components/games-form/games-form.component';
import { CreateGamesComponent } from './modules/games/pages/create-games/create-games.component';
import { EditGamesComponent } from './modules/games/pages/edit-games/edit-games.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesFormComponent,
    CreateGamesComponent,
    EditGamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
