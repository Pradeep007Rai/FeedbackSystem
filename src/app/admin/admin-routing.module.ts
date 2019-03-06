import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashBoardComponent } from './adminComponents/admin-dash-board/admin-dash-board.component';
import { ManageStudentDetailComponent } from './adminComponents/manage-student-detail/manage-student-detail.component';

const routes: Routes = [
  {
    path: '',
    component : AdminComponent, 
    children: [
        { path: '',component: AdminDashBoardComponent},
        { path: 'dashboard',component: AdminDashBoardComponent},
        { path: 'manageStudent',component: ManageStudentDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
