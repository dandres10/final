import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Student } from 'src/app/utils/interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }


  getListStudent(): Observable<Student[]> {
    return this.http.get<Student[]>('assets/students.json')
      .pipe(map((response: Student[]) => {
        return response;
      }));
  }
}