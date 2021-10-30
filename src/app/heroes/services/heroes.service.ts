import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}heroes`)

  }

  getHeroe(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}heroes/${id}`);

  }

  getHeroesByLetter(termino: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}heroes?q=${termino}&_limit=4`)

  }

}
