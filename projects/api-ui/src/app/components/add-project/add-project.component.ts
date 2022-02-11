
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CubanAPIService } from '../../shared/cubanApi.service.service';
import { category } from '../../shared/interfaces';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})

export class AddProjectComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList: any;
  @ViewChild('resetProjectForm', { static: true }) myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  projectForm!: FormGroup;
  subjectArray: Subject[] = [];
  categories: category []=[];

  ngOnInit() {
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private projectApi: CubanAPIService
  ) {


       /**Get all the categories from the service */
       this.projectApi.getCategories().subscribe((response: any) => {
        this.categories = response;

      });
   }
  /* Reactive book form */
  submitBookForm() {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      url: [this.subjectArray, [Validators.required]]
    })
  }





  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.projectForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitProjectForm() {
    if (this.projectForm.valid) {

      this.projectApi.createProject(this.projectForm.value).subscribe(res => {
        this.router.navigateByUrl('/list')

      });


    }
  }

}
