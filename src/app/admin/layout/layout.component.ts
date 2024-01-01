import { AfterViewInit, Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit{

  constructor(private cookie: CookieService){

  }
  ngAfterViewInit(): void {
    const mainscript = document.createElement('script');
    mainscript.src = 'assets/js/main.js';
    document.body.appendChild(mainscript);
    
  }

  logOut(){
    try{
      this.cookie.delete('token', '/','localhost', undefined,"Lax");
      this.cookie.delete('user_id', '/','localhost', undefined,"Lax");
      this.cookie.delete('roles', '/','localhost', undefined,"Lax");
    }
    catch(e){
      console.log(e)

    }
      

  }

}
