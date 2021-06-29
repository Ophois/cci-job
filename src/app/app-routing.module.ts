import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './job/pages/annonces/annonces.component';
import { CreditsComponent } from './job/pages/credits/credits.component';
import { JobComponent } from './job/pages/job/job.component';

const routes: Routes = [
  { path: '', redirectTo: 'job', pathMatch: 'full'},
  { path: 'job', component: JobComponent},
  { path: 'annonces', component: AnnoncesComponent},
  { path: 'credits', component: CreditsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
