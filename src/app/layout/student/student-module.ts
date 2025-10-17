import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEdit } from './student-edit/student-edit';
import { StudentList } from './student-list/student-list';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    StudentEdit,
    StudentList,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
  ],
  exports: [
    StudentEdit,
    StudentList
  ]
})
export class StudentModule { }
