import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OTPPopup } from './otp/otp-popup';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  phoneNo: string;
  OTP: number;
  
  constructor(public dialog:MatDialog) { }
  openDialog(): void {
    if(!this.phoneNo)
    return;
    console.log(typeof(this.phoneNo))
    const dialogRef = this.dialog.open(OTPPopup, {
      width: '250px',
      data: {phoneNo: this.phoneNo, OTP: this.OTP}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.OTP = result;
      console.log('The dialog was closed');
    });

  }

  ngOnInit() {
  }

}
