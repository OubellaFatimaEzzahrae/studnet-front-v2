import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Major } from './major/major';
import { Edit } from './major/edit/edit';

const routes: Routes = [
  { path: '', component: Major },           // Liste des filières
  { path: 'add', component: Edit },         // Formulaire d'ajout
  { path: 'edit/:id', component: Edit }     // Formulaire d'édition
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
