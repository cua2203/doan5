import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [
    './layout.component.css',
    '../../../assets/home/css/bootstrap.min.css',
    // '../../../assets/home/css/slick.css',
    // '../../../assets/home/css/slick-theme.css',
    // '../../../assets/home/css/nouislider.min.css',
    // '../../../assets/home/css/font-awesome.min.css',
    '../../../assets/home/css/style.css',
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserLayoutComponent {}
