import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/utils/interfaces/course';
import { CoursesService } from './courses.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'courseName', 'credits', 'teachersName', 'actions'];
  dataSource = new MatTableDataSource<Course>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listCourse: Course[] = [];
  
  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.getListCourses();
  }

  getListCourses() {
    this.coursesService.getListCourse().subscribe((data: Course[]) => {
      this.listCourse = data;
      this.dataSource.data = this.listCourse;
    })
  }

  edit(course: Course) {
    this.router.navigateByUrl('/courses/edit')
  }  

}
