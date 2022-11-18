import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { TutorListComponent } from './components/admin/tutor-list/tutor-list.component';
import { StudentListComponent } from './components/admin/student-list/student-list.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AccountSettingsComponent } from './components/admin/account-settings/account-settings.component';
import { CreateAdminComponent } from './components/admin/create-admin/create-admin.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AuthGuard } from './helpers/authGuard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./components/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'tutorList',  canActivate: [AuthGuard], loadChildren: () => import('./components/admin/tutor-list/tutor-list.module').then(m => m.TutorListModule) },
  { path: 'studentList',  canActivate: [AuthGuard], loadChildren: () => import('./components/admin/student-list/student-list.module').then(m => m.StudentListModule) },
  { path: 'adminList',  canActivate: [AuthGuard], loadChildren: () => import('./components/admin/admin-list/admin-list.module').then(m => m.AdminListModule) },
  { path: 'accountSettings',  canActivate: [AuthGuard], loadChildren: () => import('./components/admin/account-settings/account-settings.module').then(m => m.AccountSettingsModule) },
  { path: 'createAdmin',  canActivate: [AuthGuard], loadChildren: () => import('./components/admin/create-admin/create-admin.module').then(m => m.CreateAdminModule) },
  { path: 'profile',  canActivate: [AuthGuard], loadChildren: () => import('./components/admin/profile/profile.module').then(m => m.ProfileModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
