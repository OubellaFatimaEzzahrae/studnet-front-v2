import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Major } from './major/major';
import { Edit } from './major/edit/edit';
import { List } from './major/list/list';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';




@NgModule({
  declarations: [
    Major,
    Edit,
    List
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    TableModule,
    ButtonModule
  ],
   exports: [
    Major, 
    Edit,
    List
  ]
})
export class SettingsModule { }
