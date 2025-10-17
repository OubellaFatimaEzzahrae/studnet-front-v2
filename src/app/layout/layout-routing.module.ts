import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      { 
        path: 'majors', 
        loadChildren: () => import('./settings/settings-module').then(m => m.SettingsModule)
        // Correction: settings-module → settings.module
      },
      { 
        path: 'students', 
        loadChildren: () => import('./student/student-module').then(m => m.StudentModule)
        // Correction: student-module → student.module
      },
      { 
        path: '', 
        redirectTo: 'majors', 
        pathMatch: 'full' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }