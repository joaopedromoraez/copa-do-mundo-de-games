import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '@shared/models/game';
import { environment } from 'src/environments/environment';

@Injectable()
export class Lambda3Service {

  constructor(
    private http: HttpClient,
  ) { }

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`${environment.API_LAMBDA3}/Competidores?copa=games`)
  }
}
