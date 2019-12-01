import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, generate } from 'rxjs';
import { Game } from '../game.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) { }


  getGameInformation(): Observable<any> {
    return this.http.get('http://localhost:4000/api/games');
  }

  AddGameInformation(title: string, year: string, genre: string, rating: string, poster: string, review: string): Observable<any> {
    // tslint:disable-next-line: object-literal-shorthand
    const game: Game = { title: title, year: year, genre: genre, rating: rating, poster: poster, review: review };
    return this.http.post('http://localhost:4000/api/games', game);
  }


  getGame(id: string): Observable<any> {
    return this.http.get('http://localhost:4000/api/games/' + id);
  }

  updateGame(id: string, title: string, year: string, genre: string, rating: string, poster: string, review: string): Observable<any> {
    // tslint:disable-next-line: object-literal-shorthand
    const game: Game = {  title: title, year: year, genre: genre, rating: rating, poster: poster, review: review };
    return this.http.put('http://localhost:4000/api/games/' + id, game);
  }
   DeleteGame(id: string): Observable<any>{
        return this.http.delete('http://localhost:4000/api/games/'+id);
        }


}
