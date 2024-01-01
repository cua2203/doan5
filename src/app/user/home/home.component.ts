import { AfterViewInit, Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LaptopService } from 'src/app/service/laptop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: [
    '../../../assets/home/css/bootstrap.min.css',
    '../../../assets/home/css/style.css',
  ],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.makeScript()
    
  }

  Products : any[]=[];

  constructor(private service:LaptopService,private cookie:CookieService){

  }
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.service.getWithVariant().subscribe((data)=>{this.Products=data;console.log(data)});
    
  }

  makeScript(){
    const mainscript = document.createElement('script');
    mainscript.src = 'assets/home/js/main.js';

    document.body.appendChild(mainscript);
  }
  
}
