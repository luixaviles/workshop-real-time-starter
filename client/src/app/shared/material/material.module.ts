import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { }
