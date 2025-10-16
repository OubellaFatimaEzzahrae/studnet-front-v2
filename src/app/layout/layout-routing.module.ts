import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './layout-module';

const routes: Routes = [
  { path: '', component: LayoutModule, children: [
      { path: '', redirectTo: 'majors', pathMatch: 'full' } // par défaut, charge majors
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
