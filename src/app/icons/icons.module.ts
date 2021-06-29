import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSearchComponent } from './components/icon-search/icon-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSaveComponent } from './components/icon-save/icon-save.component';
import { IconFirstComponent } from './components/icon-first/icon-first.component';
import { IconLastComponent } from './components/icon-last/icon-last.component';
import { IconPrevComponent } from './components/icon-prev/icon-prev.component';
import { IconNextComponent } from './components/icon-next/icon-next.component';
import { IconDelComponent } from './components/icon-del/icon-del.component';
import { IconResetComponent } from './components/icon-reset/icon-reset.component';



@NgModule({
  declarations: [ IconSearchComponent, IconSaveComponent, IconFirstComponent, IconLastComponent, IconPrevComponent, IconNextComponent, IconDelComponent, IconResetComponent ],
  imports: [
    CommonModule, FontAwesomeModule
  ],
  exports: [ IconSearchComponent, IconSaveComponent, IconFirstComponent, IconLastComponent, IconPrevComponent, IconNextComponent, IconDelComponent, IconResetComponent]
})
export class IconsModule { }
