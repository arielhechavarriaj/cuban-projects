import { Project } from '../../shared/project';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
  ProjectData: any = [];
  dataSource!: MatTableDataSource<Project>;
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  displayedColumns: string[] = ['_id', 'project_name', 'project_email', 'section', 'action'];

  constructor(private projectApi: ApiService) {
    this.projectApi.GetProjects().subscribe(data => {
      this.ProjectData = data;
      this.dataSource = new MatTableDataSource<Project>(this.ProjectData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() { }

  deleteProject(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.projectApi.DeleteProject(e._id).subscribe()
    }
  }

}
