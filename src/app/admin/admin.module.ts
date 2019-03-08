import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNavComponent } from './adminComponents/admin-nav/admin-nav.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashBoardComponent } from './adminComponents/admin-dash-board/admin-dash-board.component';
import { ManageStudentDetailComponent } from './adminPages/manage-student-detail/manage-student-detail.component';
import { StudentListTableComponent } from './adminComponents/student-list-table/student-list-table.component';
import { MaterialModule } from '../material/material.module';
import { ManageClassDetailPageComponent } from './adminPages/manage-class-detail-page/manage-class-detail-page.component';
import { ManageTeacherDetailPageComponent } from './adminPages/manage-teacher-detail-page/manage-teacher-detail-page.component';
import { ManageDepartmentDetailPageComponent } from './adminPages/manage-department-detail-page/manage-department-detail-page.component';
import { ManageFeedBackPageComponent } from './adminPages/manage-feed-back-page/manage-feed-back-page.component';
import { CreateFeedBackFormPageComponent } from './adminPages/create-feed-back-form-page/create-feed-back-form-page.component';
import { ViewTeachersProgressPageComponent } from './adminPages/view-teachers-progress-page/view-teachers-progress-page.component';
import { DataAnalysisPageComponent } from './adminPages/data-analysis-page/data-analysis-page.component';
import { PageNotFoundComponent } from './adminPages/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminNavComponent, AdminComponent, AdminDashBoardComponent, ManageStudentDetailComponent, StudentListTableComponent, ManageClassDetailPageComponent, ManageTeacherDetailPageComponent, ManageDepartmentDetailPageComponent, ManageFeedBackPageComponent, CreateFeedBackFormPageComponent, ViewTeachersProgressPageComponent, DataAnalysisPageComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
