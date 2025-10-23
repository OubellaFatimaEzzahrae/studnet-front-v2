import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Instructor } from './layout/instructor/instructor';
import { GenericList } from './shared/components/generic-list/generic-list';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout-module').then(m => m.LayoutModule) //Lazy loading du module de mise en page
  },
  {
    path: 'instructors',
    component:  Instructor
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
