import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { JobTplComponent } from './components/job-tpl/job-tpl.component';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [
    JobTplComponent,
    SafePipe
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [IconsModule, JobTplComponent,SafePipe]
})
export class SharedModule { }
