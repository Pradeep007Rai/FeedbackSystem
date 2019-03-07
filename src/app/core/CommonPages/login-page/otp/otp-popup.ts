import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../login-page.component';

@Component({
    selector: 'app-otp-popup',
    templateUrl: 'otp-popup.html',
  })
  export class OTPPopup {
  
    constructor(
      public dialogRef: MatDialogRef<OTPPopup>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }