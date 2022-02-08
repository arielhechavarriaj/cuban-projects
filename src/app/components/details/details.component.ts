import { CommonStateService } from 'src/app/models/services/stateAPP/stateApp.service';
import { HttpClient } from '@angular/common/http';
import { CubanAPIService } from 'src/app/models/services/cubanAPI/cubanApi.service.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonViewStore } from 'src/app/+state/common/common-store.service';

export interface groupPreview {
  image: string;
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  group: groupPreview;
  constructor(
    private cubanApiService: CubanAPIService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public commonStateService: CommonStateService,
    public store:CommonViewStore
  ) {
    this.group = {
      image: '',
      url: '',
      title: '',
      description: '',
    };
  }

  ngOnInit(): void {
    this.store.setLoading(true);
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id, 'ID');
    this.cubanApiService.getProjectByID(id).subscribe((group) => {
      this.http
        .get(
          `https://favorited-link-preview.herokuapp.com/api/link-preview?url=${group.url}`
        )
        .subscribe((group: any) => {
            this.store.setLoading(false);   this.group = group.result.siteData;
        });
    });
  }

openGithub(group:any){

  window.open(group.url);

}
onBackToProjects(){
  this.router.navigateByUrl('projects');
}

}
