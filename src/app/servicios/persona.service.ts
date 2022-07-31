import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  public detailPersona(id: number): Observable<persona> {
    return this.http.get<persona>(this.URL+ 'detail/1');
  }
  public listPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL+ 'lista');
  }

  public savePersona(per: persona): Observable<any> {
    return this.http.post<any>(this.URL+ 'create', per);
  }

  public updatePersona(id: number, exp: persona): Observable<any> {
    return this.http.put<any>(this.URL+ `update/${id}`, exp);
  }

  public deletePersona(id: number): Observable<any> {
    return this.http.delete<any>(this.URL+ `delete/${id}`);
  }

}
