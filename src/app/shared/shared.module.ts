import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { JobTplComponent } from './components/job-tpl/job-tpl.component';
import { SafePipe } from './pipes/safe.pipe';
import { MyValidators } from './directives/mon-validator.directive';



@NgModule({
  declarations: [
    JobTplComponent,
    SafePipe,
    MyValidators
  ],
  imports: [
    CommonModule, RouterModule, IconsModule
  ],
  exports: [IconsModule, JobTplComponent,SafePipe, MyValidators]
})
export class SharedModule { }
