import { AfterViewInit, Component,OnInit,ViewEncapsulation } from '@angular/core';
import { Icategory } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category';

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
})
export class UserLayoutComponent implements OnInit {

  category!:Icategory[];
  constructor(private service:CategoryService){

  }


  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.service.getAll().subscribe((data)=>{this.category=data;console.log(data)});
    
  }

  // makeScript(){
  //   const mainscript = document.createElement('link');
  //   mainscript.href = 'assets/home/css/style.css';
  //   mainscript.rel='stylesheet'
  //   mainscript.type='text/css'

  //   document.head.appendChild(mainscript);
  // }
  



}
