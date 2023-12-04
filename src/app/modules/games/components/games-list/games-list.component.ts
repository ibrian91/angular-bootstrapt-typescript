import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game-data.service';




@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})



export class GamesListComponent  {

  gameArray!: any[];


constructor(private gameService: GameService){

 this.gameService.getGames().subscribe((data) => {
    this.gameArray = data;
  })


}


 
}
