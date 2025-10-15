import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Major } from './major/major';
import { Edit } from './major/edit/edit';
import { List } from './major/list/list';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    Major,
    Edit,
    List
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule
  ],
   exports: [
    Major
  ]
})
export class SettingsModule { }
