import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentList } from './student-list/student-list';
import { StudentEdit } from './student-edit/student-edit';

const routes: Routes = [
  { path: '', component: StudentList },       // /students
  { path: 'add', component: StudentEdit },    // /students/add
  { path: 'edit/:id', component: StudentEdit } // /students/edit/123
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
