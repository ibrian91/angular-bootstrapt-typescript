import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game-data.service';

export interface Game {
  nombre: string;
  descripcion: string;
  precio: number;
  id: number;
}



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent {
game?:Game;



    constructor( private activatedRoute: ActivatedRoute,private gameService: GameService){
      gameService.getGameById(this.activatedRoute.snapshot.params['id']).subscribe((res) => {
        this.game = res
      })
    }




}