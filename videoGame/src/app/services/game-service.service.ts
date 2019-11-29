import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Game} from '../game.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) { }


  getGameInformation(): Observable<any> {
    return this.http.get('http://localhost:4000/api/movies');
  }

  AddGameInformation(title: string, year: string, poster: string): Observable<any> {
    const movie: Game = {title, year, poster};
    return this.http.post('http://localhost:4000/api/movies', movie); }

        getGame(id: string): Observable<any> {
return this.http.get('http://localhost:4000/api/movies/' + id);
}
}
