import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModule } from './settings/settings-module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingsModule
  ],
  exports: [SettingsModule]   // 👈 important

})
export class LayoutModule { }
