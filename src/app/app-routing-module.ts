import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/majors', pathMatch: 'full' }, // redirection par défaut
  {
    path: 'majors',
    loadChildren: () => import('./layout/settings/settings-module').then(m => m.SettingsModule)
  },
  { path: '**', redirectTo: '/settings' } // route inconnue
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
