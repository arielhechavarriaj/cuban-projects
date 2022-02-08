import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HeaderAppComponent } from './components/header-app/header-app.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { DetailsComponent } from './components/details/details.component';

import { environment } from '../environments/environment';

import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ImageWithLoadingComponent } from './components/image-with-loading/image-with-loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    ProjectsListComponent,
    SearchListComponent,
    DetailsComponent,
    HomeComponent,
    LoadingComponent,
    ImageWithLoadingComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatMenuModule,
    MatChipsModule,
    HttpClientModule ,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    MatProgressBarModule,
  MatProgressSpinnerModule  ],
  providers: [

    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
