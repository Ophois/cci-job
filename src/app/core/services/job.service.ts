import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  // récupération de l'url de l'API dans le fichier d'environnement
  // cela permet d'avoir une API en développement et une en production
  private urlApi = environment.urlApi;
  //injection du service HTTP pour communiquer avec des API
  constructor(private http: HttpClient) {
  }
  // recherche des annonces
  recherche(contexte: any) {
    // la méthode post reçoit en premier paramètre l'API à appeler
    // et en second paramètre les infos à envoyer
    return this.http.post(this.urlApi, contexte);
  }
}
