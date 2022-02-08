import { CommonStateService } from 'src/app/models/services/stateAPP/stateApp.service';
import { ICategory, CommonViewState } from './models/interfaces/interfaces';
import {Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  events: string[] = [];
  categorySelected :any;
  constructor(public commonStateService:CommonStateService){

  }
  onCloseSideNav(){
    this.commonStateService.updateToogleSearchSideNav(false);
  }
}
