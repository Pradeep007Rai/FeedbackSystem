import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminNavComponent } from './adminComponents/admin-nav/admin-nav.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { MatListModule, MatIconModule, MatSidenavModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { AdminDashBoardComponent } from './adminComponents/admin-dash-board/admin-dash-board.component';
import { ManageStudentDetailComponent } from './adminComponents/manage-student-detail/manage-student-detail.component';

@NgModule({
  declarations: [AdminNavComponent, AdminComponent, AdminDashBoardComponent, ManageStudentDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class AdminModule { }
