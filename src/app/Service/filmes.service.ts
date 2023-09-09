import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'


export enum TiposDeBusca{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'

}
@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private url = 'http://www.omdbapi.com';
  private apiKey = 'c5d7a1f2'
  constructor(private http: HttpClient) { }

  buscarFilmes(titulo: string, type: TiposDeBusca) : Observable<any>{
    return this.http.get(`${this.url}?s=${encodeURI(titulo)}&type=${type}&apikey=${this.apiKey}`);
  }

  buscarDetalhes(id: any){
    console.log(id);
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
