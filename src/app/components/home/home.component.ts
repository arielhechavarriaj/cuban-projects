import { Component, OnInit } from '@angular/core';
import { CommonStateService } from 'src/app/models/services/stateAPP/stateApp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public commonStateService:CommonStateService){

  }
  ngOnInit(): void {
  }
  onSearchProjects(){
    this.commonStateService.updateToogleSearchSideNav(true);
  }

}
