import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './CommonPages/page-not-found/page-not-found.component';
import { LoginPageComponent } from './CommonPages/login-page/login-page.component';
const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule'
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
