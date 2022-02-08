import { HomeComponent } from './components/home/home.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { DetailsComponent } from './components/details/details.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'projects',
    component: ProjectsListComponent,
  },
   {
    path: 'details/:id',
    component: DetailsComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
