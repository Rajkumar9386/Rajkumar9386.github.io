import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list.component';
import { AdminListRoutingModule } from './admin-list-routing.module';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [AdminListComponent],
  imports: [
    CommonModule,
    AdminListRoutingModule,
    HeaderModule
  ]
})
export class AdminListModule { }
