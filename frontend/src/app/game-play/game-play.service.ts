import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamePlayService {

  uri = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  getDrawPile() {
    return this.http.get(`${this.uri}/draw-pile`);
  }

}
