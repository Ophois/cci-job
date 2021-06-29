import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { JobComponent } from './pages/job/job.component';
import { AnnoncesComponent } from './pages/annonces/annonces.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { SearchFormComponent } from './components/search-form/search-form.component';



@NgModule({
  declarations: [
    JobComponent,
    AnnoncesComponent,
    CreditsComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule
  ],
  exports: [  ]
})
export class JobModule { }
