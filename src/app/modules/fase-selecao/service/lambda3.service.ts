import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class Lambda3Service {

  constructor(
    private http: HttpClient,
  ) { }

  getGames(): Observable<any>{
    return this.http.get(`${environment.API_LAMBDA3}/Competidores?copa=games`)
  }
}
