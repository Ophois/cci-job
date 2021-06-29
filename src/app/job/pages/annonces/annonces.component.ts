import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {

  public liste!: any;
  public msg!: any;
  public mode = "edit";

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('annonces'))
    {
      let ls:any = localStorage.getItem('annonces');
      this.liste = JSON.parse(ls);
    }
    else{
      this.liste = [];
      this.msg = "Aucune annonce enregistrée";
    }
  }

  supprimer(annonce: any) : void {
    //rechercher annonce dans liste
    this.liste.forEach((element:any, idx:number) => {
      if(element.id === annonce.id){
        //console.log('trouvé' + idx);
         //supprimer annonce
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
