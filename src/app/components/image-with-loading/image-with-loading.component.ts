import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image-with-loading.component.html',
  styleUrls: ['./image-with-loading.component.css']
})
export class ImageWithLoadingComponent {

  @Input() loader:string='https://media.tenor.com/images/f864cbf3ea7916572605edd3b3fe637f/tenor.gif';
  @Input() height:number=200;
  @Input() width:number=220;
  @Input() image:string | undefined='';

  isLoading:boolean;

  constructor() {
    this.isLoading=true;
  }

  hideLoader(){
    this.isLoading=false;
  }

}
