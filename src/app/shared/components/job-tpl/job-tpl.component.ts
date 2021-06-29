import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job-tpl',
  templateUrl: './job-tpl.component.html',
  styleUrls: ['./job-tpl.component.scss']
})
export class JobTplComponent implements OnInit {

  /* composant enfant d'affichage d'une annonce
  Appelé depuis les pages jobComponent et annoncesComponent
  dans une boucle *ngFor
  les @input permettent de passer l'annonce à afficher,
  qu'elle provienne de l'API ou de la sauvegarde, ainsi que le mode
  pour personnaliser le bouton (supprimer si annonce sauvegardée,
    enregistrer si recherche API)
    l'OutPut() permet de retourner un message au parent
    pour qu'il sauvegarde l'annonce dans le localStorage,
    ou qu'il l'efface du localStorage */
  @Input() emploi!: any;
  @Input() mode!: any;
  @Output() saved: EventEmitter<any> = new EventEmitter<any>();
  /* variables à afficher ou nécessaires */
  public btnText!: any;
  public status: boolean = false;
  public classes!: string;
  constructor() { }

  /* changement du bouton (texte et classe) en fonction du mode */
  ngOnInit(): void {
    // pour l'affichage d'une annonces sauvegardées
    if(this.mode=='edit'){
      // bouton supprimer, couleur rouge
       this.btnText = 'Supprimer';
       //statut false pour ne pas bloquer le bouton
       this.status = false;
       this.classes = "btn btn-danger"
    }
    else {
      // affichage d'une annonces de l'API
      //bouton enregistrer, couleur verte
       this.btnText = 'Enregistrer';
       this.classes = "btn btn-success";
       // on vérifie si l'annonce n'est pas déjà enregistrée
      if(localStorage.getItem('annonces'))
      {
        let tmp:any = localStorage.getItem('annonces');
        let annonces:any = JSON.parse(tmp);
        /* parcours des annonces enregistrées.
           si l'ID de l'annonce à afficher
           est déjà dans le localStorage
           on désactive le bouton "enregistrer"
        */
        annonces.forEach((elem:any) => {
          if(elem.id == this.emploi.id) this.status = true;
        });
      }
    }
  }

  /* envoi d'un évènement au parent, soit pour enregistrer,
  soit pour supprimer l'annonce */
  gest(annonce: any): void {
    this.status = true;
    this.saved.emit(annonce);
  }

}
