import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-games',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.css']
})
export class EditGamesComponent {
  titulo:string = "Modificar juego:"

  habilitar:boolean = false

  funcionDelBoton(){
    console.log('Funciono');
  }
}
