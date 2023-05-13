import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StudentsRoutes } from "./students.routing";
import { HttpClientModule } from '@angular/common/http';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/utils/material/material.module";

@NgModule({
  declarations: [
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutes,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: []
})
export class StudentsModule { }
