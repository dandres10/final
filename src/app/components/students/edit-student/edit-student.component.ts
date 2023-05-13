import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {


  form!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.initForm();
  }

  back() {
    this.router.navigateByUrl('students');
  }


  private initForm() {
    let buildForm = {
      "id": [ ,

      ],
      "firstName": [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      "lastName": [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    };
    this.form = this.fb.group(buildForm);
  }

  save() {

    if (this.form.valid) {
      console.log(this.form.valid)
      console.log(this.form.value)
    }
  }


}
