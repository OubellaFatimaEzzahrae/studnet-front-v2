import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEdit } from './student-edit/student-edit';
import { StudentList } from './student-list/student-list';



@NgModule({
  declarations: [
    StudentEdit,
    StudentList
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
