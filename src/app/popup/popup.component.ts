import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  template: `
    <!-- <h2 mat-dialog-title>Message</h2>
<div mat-dialog-content>
  {{ data.message }}
</div>
<div mat-dialog-actions>
  <button mat-button [mat-dialog-close]="true">OK</button>
</div> -->

    <!-- <h2 mat-dialog-title>Message</h2>
    <div mat-dialog-content>
      {{ data.message }}
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">OK</button>
    </div> -->
    <h2 mat-dialog-title>Title</h2>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button color="primary"></button>
      <button mat-button></button>
    </div>
  `,
})
export class PopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
