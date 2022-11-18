import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { AccountSettingsComponent } from './account-settings.component';
import { HeaderModule } from '../../shared/header/header.module';



@NgModule({
  declarations: [AccountSettingsComponent],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule,
    HeaderModule
  ]
})
export class AccountSettingsModule { }
