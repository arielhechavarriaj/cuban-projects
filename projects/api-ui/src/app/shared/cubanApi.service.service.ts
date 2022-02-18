

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Project } from 'src/assets/projects';


@Injectable({
  providedIn: 'root',
})
export class CubanAPIService {
  apiUrl = 'http://localhost:3000/api/v1/';
  apiURLProjects = 'http://localhost:3000/api/v1/' + 'projects';
 constructor(private http: HttpClient) {}
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}categories`);
  }



  getProjects(categoriesFilter?: string[]): Observable<Project[]> {
    let params = new HttpParams();
    if (categoriesFilter) {
      params = params.append('categories', categoriesFilter.join(','));
    }
    return this.http.get<Project[]>(this.apiUrl+"projects", { params: params });
  }

  createProject(projectData: FormData): Observable<Project> {
    return this.http.post<Project>(this.apiURLProjects, projectData);
  }

  getProject(projectId: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiURLProjects}/${projectId}`);
  }

  updateProject( projectid: any,projectData: FormData): Observable<Project> {
    return this.http.put<Project>(
      `${this.apiURLProjects}/${projectid}`,
      projectData
    );
  }

  deleteProject(projectId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLProjects}/${projectId}`);
  }

  getProjectCount(): Observable<number> {
    return this.http
      .get<number>(`${this.apiURLProjects}/get/count`)
      .pipe(map((objectValue: any) => objectValue.projectCount));
  }

  getProjectByID(projectid: string | null): Observable<Project> {
    return this.http.get<Project>(
      `${this.apiURLProjects}/${projectid}`,
    );
  }

}
