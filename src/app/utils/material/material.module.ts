import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

const MATERIAL_LIB = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_LIB
  ],
  exports: MATERIAL_LIB
})
export class MaterialModule { }
