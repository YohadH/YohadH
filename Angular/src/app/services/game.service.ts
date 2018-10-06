import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../Model/game.model';

const siteUrl = 'http://localhost:6447/api/gametable/';
const httpOptions = {
  headers: new HttpHeaders(
      {
      'Content-Type': 'application/json',
      'Data-Type' : 'json' }
  )
};

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

   getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(siteUrl);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(siteUrl + id);
  }

  getGamesByPlayerName(name: string): Observable<Game[]> {
    return this.http.get<Game[]>(siteUrl + name);
  }

  getGamesBySearchParams(ID: number, gameName: string, Player1: string,
    Player2: string, Who_won: string): Observable<Game[]> {
    let searchParams = `ID=${ID}`;
    if (Player1 != null && Player1 !== '') { searchParams += `&Player1=${Player1}`; }
    if (Player2 != null && Player2 !== '') { searchParams += `&Player2=${Player2}`; }
    if (gameName != null && gameName !== '') { searchParams += `&gameName=${gameName}`; }
    if (Who_won != null && Who_won !== '') { searchParams += `&Who_won=${Who_won}`; }
    console.log(`${siteUrl}search?${searchParams}`);
    return this.http.get<Game[]>(`${siteUrl}search?${searchParams}`);
  }

  addNewGame(game): Observable<Game> {
    return this.http.post<Game>(siteUrl, game, httpOptions);
  }

  updateGame(game: Game): Observable<Game> {
    const url = siteUrl + game.ID;
    console.log(url);
    return this.http.put<Game>(url, game);
  }

  deleteGame(ID: number): Observable<Game> {
    return this.http.delete<Game>(siteUrl + ID, httpOptions);
  }
}
