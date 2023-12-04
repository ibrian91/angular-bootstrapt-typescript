import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesListComponent } from './modules/games/components/games-list/games-list.component';
import { GamesFormComponent } from './modules/games/components/games-form/games-form.component';
import { CreateGamesComponent } from './modules/games/pages/create-games/create-games.component';
import { EditGamesComponent } from './modules/games/pages/edit-games/edit-games.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HomeModule,
    CommonModule,
    HttpClientModule, // esto nos permite hacer peticiones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
