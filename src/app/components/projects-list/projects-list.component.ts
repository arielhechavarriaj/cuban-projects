import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CubanAPIService } from 'src/app/models/services/cubanAPI/cubanApi.service.service';
import { IProject, ICategory } from './../../models/interfaces/interfaces';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonStateService } from 'src/app/models/services/stateAPP/stateApp.service';
import { CommonViewStore } from 'src/app/+state/common/common-store.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  projects: IProject[] = [];
  _categorySelected: any = null;
  notFound: boolean = false;

  constructor(
    private cubanApiService: CubanAPIService,
    public commonStateService: CommonStateService,
    public store: CommonViewStore,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.commonStateService.categorySelected$.subscribe((category) => {
      this.store.setLoading(true);
      this.notFound = false;
      if (category.name != '') {
        this._categorySelected = category;
        this.cubanApiService
          .getProjects([category.id])
          .subscribe((projectsResponse: any) => {
            this.store.setLoading(false);
            this.projects = projectsResponse.projectList;
            if (this.projects.length == 0) {
              this.notFound = true;
            }

            for (let index = 0; index < this.projects.length; index++) {
              const project = this.projects[index];
              this.http
                .get(
                  `https://favorited-link-preview.herokuapp.com/api/link-preview?url=${project.url}`
                )
                .subscribe((group: any) => {
                  this.store.setLoading(false);
                  this.projects[index].image = group.result.siteData.image;
                         });
            }
          });
      } else {
        this.projects = [];
      }
    });
  }

  onLoadImage(project:IProject){
    console.log('aqui estamos')
    project.loadImage=true
  }
  onClearCategory(){
    this.router.navigateByUrl('/').then(resp=>{
      this.commonStateService.updateToogleSearchSideNav(true);
    });

  }

}
