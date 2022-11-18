import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorListComponent } from './tutor-list.component';
import { TutorListRoutingModule } from './tutor-list-routing.module';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [TutorListComponent],
  imports: [
    CommonModule,
    TutorListRoutingModule,
    HeaderModule
  ]
})
export class TutorListModule { }
