import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout';
import { SettingsModule } from './settings/settings-module';
import { StudentModule } from './student/student-module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    SettingsModule,
    StudentModule
  ],
  exports: [
    LayoutComponent,
    SettingsModule,
    StudentModule
  ]
})
export class LayoutModule { }
