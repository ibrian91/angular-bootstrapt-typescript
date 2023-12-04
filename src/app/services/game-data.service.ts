import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/modules/games/pages/game/game.component';





@Injectable({
  providedIn: 'root',
})



export class GameService {


  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get<Game[]>('http://localhost:3000/games');
  }

  getGameById(id: string) {
    return this.http.get<Game>(`http://localhost:3000/games/${id}`, {});
    // return this.http.get<Employee>(`http://localhost:3000/employees`, {
    //   // params: new HttpParams().set('id', id),
    //   params: new HttpParams().append('id', id).append('name', 'jorge'),
    // });
  }
}
