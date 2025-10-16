import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentModule } from './student/student-module';

const routes: Routes = [
  { path: '', component: StudentModule, children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' } // par défaut, charge students
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
