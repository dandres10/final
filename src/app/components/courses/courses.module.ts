import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoursesRoutes } from "./courses.routing";
import { EditCourseComponent } from './edit-course/edit-course/edit-course.component';


@NgModule({
  declarations: [
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutes
  ],
  providers: []
})
export class CoursesModule { }
