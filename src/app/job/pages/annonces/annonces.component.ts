import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  // variables affichées sur la page
  public liste!: any;
  public msg!: any;
  public mode = "edit";

  constructor() { }
  // récupération des annonces stockées dans le localStorage
  // a l'initialisation de la page
  ngOnInit(): void {
    //si localStorage existant
    if(localStorage.getItem('annonces'))
    {
      //on récupère les annonces et on les transforme en tableau JSON
      let ls:any = localStorage.getItem('annonces');
      this.liste = JSON.parse(ls);
    }
    else{
      //si aucune annonce enregistrée, on crée un tableau vide
      this.liste = [];
      this.msg = "Aucune annonce enregistrée";
    }
  }

  // suppression d'une annonce dans le localStorage
  supprimer(annonce: any) : void {
    //rechercher annonce dans liste (boucle avec index)
    this.liste.forEach((element:any, idx:number) => {
      if(element.id === annonce.id){
        //console.log('trouvé' + idx);
         //supprimer annonce dans le tableau
        this.liste.splice(idx, 1);
      }
    });
    //si liste vide, suppression ls + affichage msg
    if(this.liste.length == 0)
    {
      localStorage.removeItem('annonces');
      this.msg = "Aucune annonce enregistrée";
    }
    // réenregistrer la liste
    else localStorage.setItem('annonces', JSON.stringify(this.liste));
  }

}
