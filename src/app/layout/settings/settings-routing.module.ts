import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Major } from './major/major';

const routes: Routes = [
  { 
    path: '', 
    component: Major 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }