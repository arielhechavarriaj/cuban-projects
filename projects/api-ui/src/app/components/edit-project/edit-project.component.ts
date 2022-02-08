import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})

export class EditProjectComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList: any;
  @ViewChild('resetProjectForm', { static: true }) myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projectForm!: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private projectApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.projectApi.GetProject(id).subscribe((data: { subjects: Subject[]; project_name: any; project_email: any; section: any; dob: any; gender: any; }) => {
      console.log(data.subjects)
      this.subjectArray = data.subjects;
      this.projectForm = this.fb.group({
        project_name: [data.project_name, [Validators.required]],
        project_email: [data.project_email, [Validators.required]],
        section: [data.section, [Validators.required]],
        subjects: [data.subjects],
        dob: [data.dob, [Validators.required]],
        gender: [data.gender]
      })
    })
  }

  /* Reactive book form */
  updateBookForm() {
    this.projectForm = this.fb.group({
      project_name: ['', [Validators.required]],
      project_email: ['', [Validators.required]],
      section: ['', [Validators.required]],
      subjects: [this.subjectArray],
      dob: ['', [Validators.required]],
      gender: ['Male']
    })
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  /* Date */
  formatDate(e: { target: { value: string | number | Date; }; }) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
  /*  this.projectForm.get('dob').setValue(convertDate, {
      onlyself: true
    })*/
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.projectForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateProjectForm() {
    console.log(this.projectForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.projectApi.UpdateProject(id, this.projectForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/projects-list'))
      });
    }
  }

}
