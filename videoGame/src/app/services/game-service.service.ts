import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../game.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private httpc: HttpClient) { }

  GetGameInformation(): Observable <any>{
    return this.httpc.get('http://localhost:4000/api/movies');
  }

  AddGameInformation(title: string,year: string,poster: string): Observable<any>{
    const game: Game = {title, year, poster};
    return this.httpc.post('http://localhost:3000/api/movies', game);
    }
}
