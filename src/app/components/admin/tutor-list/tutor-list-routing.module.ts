import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorListComponent } from './tutor-list.component';

const routes: Routes = [
  { path: '', component: TutorListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorListRoutingModule { }
