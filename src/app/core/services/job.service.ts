import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
  }

  recherche(contexte: any) {
    return this.http.post(this.urlApi, contexte);
  }
}
