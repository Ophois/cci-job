import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/core/services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  public liste!: any;
  public recherche!: any;
  public p1: boolean = true;
  public pl: boolean = false;
  private lastPage: number = 1;
  public mode="search";

  constructor(private js: JobService) {
    if(localStorage.getItem('config')) {
      //récup config
      let tmp:any = localStorage.getItem('config');
      this.recherche = JSON.parse(tmp);
    }
    else {
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

  search(recherche: any): void
  {
   //console.log(recherche);
    this.liste = [];
    //console.log(recherche);
    //stockage LS
    localStorage.setItem('config', JSON.stringify(recherche));
    //appel Service
    this.js.recherche(recherche).subscribe((data: any) => {
     // console.log(data);
      this.lastPage = Math.ceil(data.totalCount / 20);
      this.liste = data;
    })
  }

  reset(): void {
    localStorage.removeItem('config');
  }

  first(): void {
    this.recherche.page = 1;
    this.search(this.recherche);
    this.p1 = true;
    if(this.lastPage > 1) this.pl = false;
  }
  prev(): void {
    if(this.recherche.page >= 2) this.recherche.page--;
    this.search(this.recherche);
    if(this.recherche.page == 1 ) this.p1 = true;
    else this.p1 = false;
    if(this.lastPage > 1) this.pl = false;
  }
  next(): void {
    if(this.recherche.page < this.lastPage) this.recherche.page++;
    this.search(this.recherche);
    if(this.recherche.page === this.lastPage) this.pl = true;
    else this.p1 = false;
    if(this.lastPage > 1) this.p1 = false;
  }
  last(): void {
    this.recherche.page = this.lastPage;
    this.search(this.recherche);
    this.pl = true;
    if(this.lastPage > 1) this.p1 = false;
  }

  sauvegarde(annonce:any): void {
    //console.log(annonce);
    //récupérer la liste des annonces sauvegardées dans LS
    let annonces: any;
    if(localStorage.getItem('annonces')){
      let ls: any = localStorage.getItem('annonces');
      annonces = JSON.parse(ls);
    }
    else {
      annonces = [];
    }
    //ajouter annonce si nombre < 20
    if(annonces.length < 20) annonces.push(annonce);
    else alert('Vous ne pouvez sauvegarder que 20 annonces');
    //console.log(annonces);
    //sauvegarder la nouvelle liste dans le LS
    localStorage.setItem('annonces', JSON.stringify(annonces));
  }

}
