import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSearchComponent } from './components/icon-search/icon-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ IconSearchComponent ],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [ IconSearchComponent]
})
export class IconsModule { }
