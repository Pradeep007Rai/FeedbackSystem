import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashBoardComponent } from './adminComponents/admin-dash-board/admin-dash-board.component';
import { ManageStudentDetailComponent } from './adminPages/manage-student-detail/manage-student-detail.component';
import { DataAnalysisPageComponent } from './adminPages/data-analysis-page/data-analysis-page.component';
import { CreateFeedBackFormPageComponent } from './adminPages/create-feed-back-form-page/create-feed-back-form-page.component';
import { ManageFeedBackPageComponent } from './adminPages/manage-feed-back-page/manage-feed-back-page.component';
import { ManageDepartmentDetailPageComponent } from './adminPages/manage-department-detail-page/manage-department-detail-page.component';
import { ManageTeacherDetailPageComponent } from './adminPages/manage-teacher-detail-page/manage-teacher-detail-page.component';
import { ManageClassDetailPageComponent } from './adminPages/manage-class-detail-page/manage-class-detail-page.component';
import { PageNotFoundComponent } from './adminPages/page-not-found/page-not-found.component';
import { ViewTeachersProgressPageComponent } from './adminPages/view-teachers-progress-page/view-teachers-progress-page.component';
const routes: Routes = [
  {
    path: '',
    component : AdminComponent, 
    children: [
        { path: '',component: AdminDashBoardComponent},
        { path: 'dashboard',component: AdminDashBoardComponent},
        { path: 'manageStudent',component: ManageStudentDetailComponent},
        { path: 'manageClass',component: ManageClassDetailPageComponent},
        { path: 'manageTeacher',component: ManageTeacherDetailPageComponent},
        { path: 'manageDepartment',component: ManageDepartmentDetailPageComponent},
        { path: 'manageFeedBackForm',component: ManageFeedBackPageComponent},
        { path: 'createFeedBack',component: CreateFeedBackFormPageComponent},
        { path: 'dataAnalysis',component: DataAnalysisPageComponent},
        { path: 'viewTeacherProgress',component: ViewTeachersProgressPageComponent},
        { path: 'createFeedbackForm',component: CreateFeedBackFormPageComponent},
        { path: '**',component: PageNotFoundComponent}
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
