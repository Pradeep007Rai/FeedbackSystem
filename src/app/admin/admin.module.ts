import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNavComponent } from './adminComponents/admin-nav/admin-nav.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashBoardComponent } from './adminComponents/admin-dash-board/admin-dash-board.component';
import { ManageStudentDetailComponent } from './adminPages/manage-student-detail/manage-student-detail.component';
import { StudentListTableComponent } from './adminComponents/student-list-table/student-list-table.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AdminNavComponent, AdminComponent, AdminDashBoardComponent, ManageStudentDetailComponent, StudentListTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
