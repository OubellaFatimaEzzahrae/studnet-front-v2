import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEdit } from './student-edit/student-edit';
import { StudentList } from './student-list/student-list';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Student } from './student';
import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    StudentEdit,
    StudentList,
    Student
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    SelectModule
  ],
  exports: [
    StudentEdit,
    StudentList,
    Student
  ]
})
export class StudentModule { }
