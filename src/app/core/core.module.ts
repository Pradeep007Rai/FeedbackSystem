import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './CommonPages/page-not-found/page-not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatMenuModule, MatRippleModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { LoginPageComponent } from './CommonPages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { OTPPopup } from './CommonPages/login-page/otp/otp-popup';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PageNotFoundComponent, LoginPageComponent,OTPPopup],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports:[
    RouterModule
  ],
  bootstrap:[
    OTPPopup
  ]
})
export class CoreModule { }
