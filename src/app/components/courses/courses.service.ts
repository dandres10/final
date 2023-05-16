import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Course } from 'src/app/utils/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getListCourse(): Observable<Course[]>{
    return this.http.get<Course[]>('assets/courses.json')
    .pipe(map((response: Course[]) => {
      return response;
    }))
  }
}
