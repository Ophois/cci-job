import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/shared/directives/mon-validator.directive';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  /* le formulaire est un composant enfant,
  appelé depuis un composant parent (ici jobComponent)
  Les @input() permettent au parent de fournir des infos à l'enfant
  les @Output() permettent à l'enfant de créer un évènement qui sera
                intercepté et traité par le parent
  */
  @Input() init!: any;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() reseted: EventEmitter<any> = new EventEmitter<any>();
  //le nom du formulaire (directive [formGroup] dans le html)
  public form!: FormGroup;
  //injection du service FormBuilder pour créer les formulaires
  constructor(private fb: FormBuilder) {

   }
  /* initialisation du formulaire
     On crée un objet formulaire, avec les valeurs par défaut
     et les validateurs si besoin
     MyValidators.validSalary est un "custom validator */
  ngOnInit(): void {
    this.form = this.fb.group({
      keywords: [this.init.keywords, Validators.required],
      location: [this.init.location, Validators.required],
      radius: [this.init.radius],
      salary: [this.init.salary, MyValidators.validSalary],
      searchMode: [this.init.searchMode],
      page: [this.init.page]
    });
  }

  // à la soumission du formulaire, envoi d'un message au parent
  // qui devra l'intercepter et le traiter
  onSubmit(): void {
    if(!this.form.value.page) this.form.value.page = 1;
    this.submitted.emit(this.form.value);
  }
  // remise à blanc du formulaire. Sera aussi traité par le parent
  reset(): void {
    this.reseted.emit();
  }

}
