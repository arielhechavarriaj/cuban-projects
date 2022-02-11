import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../shared/project';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CubanAPIService } from '../../shared/cubanApi.service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  ProjectData: Project[] = [];

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  displayedColumns: string[] = ['name','description', 'category' , 'url','image'];
  dataSource: MatTableDataSource<Project> = new MatTableDataSource( );

  constructor(private projectApi: CubanAPIService) {

  }

  ngOnInit() {
this.reload();
  }

  reload(){
    this.projectApi.getProjects().subscribe((data:any) => {
      console.log('Tenemos projectos!!',data.projectList)
      this.ProjectData = data.projectList;
this.dataSource.data=this.ProjectData;

    })
  }

  deleteProject(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {

      this.projectApi.deleteProject(e._id).subscribe(resp=>this.reload())
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


