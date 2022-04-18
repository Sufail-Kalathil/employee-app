import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [{
      path: 'employee',
      loadChildren: () => import('../../modules/employee/employee.module').then(m => m.EmployeeModule)
    },
      {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
