import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAdminRoutingModule } from './create-admin-routing.module';
import { CreateAdminComponent } from './create-admin.component';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [CreateAdminComponent],
  imports: [
    CommonModule,
    CreateAdminRoutingModule,
    HeaderModule
  ]
})
export class CreateAdminModule { }
