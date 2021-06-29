import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-job-tpl',
  templateUrl: './job-tpl.component.html',
  styleUrls: ['./job-tpl.component.scss']
})
export class JobTplComponent implements OnInit {

  @Input() emploi!: any;
  @Input() mode!: any;
  @Output() saved: EventEmitter<any> = new EventEmitter<any>();
  public btnText!: any;
  public status: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(this.mode=='edit'){
       this.btnText = 'Supprimer';
       this.status = false;
    }
    else {
       this.btnText = 'Enregistrer';
      if(localStorage.getItem('annonces'))
      {
        let tmp:any = localStorage.getItem('annonces');
        let annonces:any = JSON.parse(tmp);
        annonces.forEach((elem:any) => {
          if(elem.id == this.emploi.id) this.status = true;
        });
      }
    }
  }

  gest(annonce: any): void {
    this.status = true;
    this.saved.emit(annonce);
  }

}
