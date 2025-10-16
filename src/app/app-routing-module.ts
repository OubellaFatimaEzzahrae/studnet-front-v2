import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/majors', pathMatch: 'full' },
  {
    path: 'majors',
    loadChildren: () => import('./layout/settings/settings-module').then(m => m.SettingsModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./layout/student/student-module').then(m => m.StudentModule)
  },
  { path: '**', redirectTo: '/majors' } // toutes les routes inconnues redirigent vers Majors
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
