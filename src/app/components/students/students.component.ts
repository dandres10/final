import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from './students.service';
import { Student } from 'src/app/utils/interfaces/student';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'actions'];
  dataSource = new MatTableDataSource<Student>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listStudent: Student[] = [];

  constructor(private studentsService: StudentsService, private router: Router) { }

  ngOnInit(): void {
    this.getListStudents();
  }

  getListStudents() {
    this.studentsService.getListStudent().subscribe((data: Student[]) => {
      this.listStudent = data;
      this.dataSource.data = this.listStudent;
    })
  }

  edit(student: Student) {
    this.router.navigateByUrl('/students/edit')
  }

}
