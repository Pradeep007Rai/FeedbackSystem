import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './CommonPages/page-not-found/page-not-found.component';
import { LoginPageComponent } from './CommonPages/login-page/login-page.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: '../student/student.module#StudentModule'
  },
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule'
  },
  {
    path: 'student',
    loadChildren: '../student/student.module#StudentModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
