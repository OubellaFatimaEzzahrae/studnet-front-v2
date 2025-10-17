import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'majors', loadChildren: () => import('../layout/settings/settings-module').then(m => m.SettingsModule) },
      { path: 'students', loadChildren: () => import('../layout/student/student-module').then(m => m.StudentModule) },
      { path: '', redirectTo: 'majors', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
