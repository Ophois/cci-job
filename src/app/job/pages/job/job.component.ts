import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/core/services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  /* variables affichées ou nécessaires pour la page */
  public liste!: any;
  public recherche!: any;
  public p1: boolean = true;
  public pl: boolean = false;
  public lastPage: number = 1;
  public mode="search";

  // injection du service dans le constructeur
  constructor(private js: JobService) {
    // récupération de la configuration dans le localStorage,
    //si elle existe
    if(localStorage.getItem('config')) {
      //récup config et transformation en objet JSON
      let tmp:any = localStorage.getItem('config');
      this.recherche = JSON.parse(tmp);
    }
    else {
      //si pas de config enregistrée, création d'un objet modèle
      // attention page doit valoir 1 pour que l'API fonctionne
      //console.log('init');
      this.recherche = {
        keywords: '',
        location: '',
        radius: 0,
        salary: 5000,
        searchMode: '3',
        page: 1
      }
    }
  }

  ngOnInit(): void {
  }

  // recherche dans l'API
  search(recherche: any): void
  {
   //console.log(recherche);
   // nettoyage de la page avec une liste vide
    this.liste = [];
    //console.log(recherche);
    //stockage dans le LocalStorage de la config
    localStorage.setItem('config', JSON.stringify(recherche));
    //appel Service
    this.js.recherche(recherche).subscribe((data: any) => {
     // console.log(data);
      // calcul du nombre maxi de pages
      // en fonction du nombre d'annonces
      this.lastPage = Math.ceil(data.totalCount / 20);
      //affichage des annonces
      this.liste = data;
    })
  }

  // remise à 0 du formulaire
  reset(): void {
    //suppression de la config enregistrée dans le localStorage
    localStorage.removeItem('config');
    //création d'un objet vide, page = 1 obligatoire
    this.recherche = {
      page: 1
    }
  }

  // affichage de la première page d'annonces
  first(): void {
    //paramètre page = 1
    this.recherche.page = 1;
    //recherche via l'API
    this.search(this.recherche);
    // blocage des boutons précédent et premier
    this.p1 = true;
    // si plus d'une page, déblocage des boutons suivant et dernier
    if(this.lastPage > 1) this.pl = false;
  }

  // affichage de la page précédente
  prev(): void {
    // si page actuelle >= 2, décrément de la page
    if(this.recherche.page >= 2) this.recherche.page--;
    // recherche via l'API
    this.search(this.recherche);
    // si page = 1 blocage boutons précédent et premier
    if(this.recherche.page == 1 ) this.p1 = true;
    else this.p1 = false;
    // si plus d'une page, déblocage boutons suivant et dernier
    if(this.lastPage > 1) this.pl = false;
  }

  // affichage de la page suivante
  next(): void {
    // si page actuelle < nb page total, incrément de la page
    if(this.recherche.page < this.lastPage) this.recherche.page++;
    // recherche via l'API
    this.search(this.recherche);
    // si dernière page, blocage boutons suivant et dernier
    if(this.recherche.page === this.lastPage) this.pl = true;
    else this.p1 = false;
    // déblocage boutons précédent et premier si plus d'une page
    if(this.lastPage > 1) this.p1 = false;
  }

  // affichage dernière page.
  last(): void {
    // page = dernière page
    this.recherche.page = this.lastPage;
    //recherche via l'API
    this.search(this.recherche);
    // blocage boutons suivant et dernier
    this.pl = true;
    // si plus d'une page, déblocage boutons précédent et premier
    if(this.lastPage > 1) this.p1 = false;
  }

  // sauvegarde d'une annonce dans le localStorage
  sauvegarde(annonce:any): void {
    //console.log(annonce);
    //récupérer la liste des annonces sauvegardées dans LS
    let annonces: any;
    // récupération des annonces déjà enregistrées
    // et transformation en tableau JSON
    if(localStorage.getItem('annonces')){
      let ls: any = localStorage.getItem('annonces');
      annonces = JSON.parse(ls);
    }
    //si aucune annonce enregistrée, création tableau vide
    else {
      annonces = [];
    }
    //ajouter annonce dans le tableau si nombre < 20
    if(annonces.length < 20) annonces.push(annonce);
    else alert('Vous ne pouvez sauvegarder que 20 annonces');
    //console.log(annonces);
    //sauvegarder la nouvelle liste dans le LS
    localStorage.setItem('annonces', JSON.stringify(annonces));
  }

}
