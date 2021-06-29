import { Directive} from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[myValidators]'
})

export class MyValidators {

  /* on controle que le salaire est entre 1000 et 5000 € / mois
    on utilise un paramètre control de type AbstracControl
    et on retourne une valeur, soit de type ValidationErrors, soit null
    On teste les valeurs non désirées, qui retournent une valeur "true"
    un test valide returne null
  */
  static validSalary(control: AbstractControl): ValidationErrors | null {
    console.log(control.value);
    if(control.value < 1000 || control.value > 5000) {
      return { validSalary: true}
    }
    return null;
  }

}
