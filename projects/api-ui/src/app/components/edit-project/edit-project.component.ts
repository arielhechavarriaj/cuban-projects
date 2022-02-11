
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CubanAPIService } from '../../shared/cubanApi.service.service';

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
  categories: any[] = [];

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private projectApi: CubanAPIService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.projectApi.getProjectByID(id).subscribe(data => {
console.log(data)
      this.projectForm = this.fb.group({
        name: [data.name, [Validators.required]],
        description: [data.description],
        category: [data.category.id, [Validators.required]],
        url: [data.url]
      })
    })


       /**Get all the categories from the service */
       this.projectApi.getCategories().subscribe((response: any) => {
        this.categories = response;

      });

  }

  /* Reactive book form */
  updateBookForm() {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      category: ['', [Validators.required]],
      url: [this.subjectArray]
    })
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
      this.projectApi.updateProject(id, this.projectForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/list'))
      });
    }
  }

}
