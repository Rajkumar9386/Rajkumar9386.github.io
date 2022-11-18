import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import { StudentListRoutingModule } from './student-list-routing.module';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule, 
    StudentListRoutingModule,
    HeaderModule
  ]
})
export class StudentListModule { }
