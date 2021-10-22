import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Player, Game } from '../models/player';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private router: Router) { }
  

  startGame(game: Game):Observable<Game|void>{
    return this.http
            .post<Game>(`${environment.API_URL}/partida`, game)
            .pipe(
              map((juego:Game)=>{
                console.log('Juego->', juego)
                return juego;
              })
            )              
            
  }

  startPlayer(player: Player):Observable<Player|void>{
    return this.http
            .post<Player>(`${environment.API_URL}/jugador`, player)
            .pipe(
              map((jugador:Player)=>{
                console.log('Jugador->', jugador);
                
                return jugador;
              })
            )

  
  }

  getOneGame(cod: string):Observable<any>{
    return this.http
            .get<any>(`${environment.API_URL}/partida/${cod}`)

  }

  


}
