import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {}

  getPokemon() {
    return this.httpClient.get<{ results: any[] }>("https://pokeapi.co/api/v2/pokemon")

  }
}
