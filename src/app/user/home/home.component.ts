import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: [
    './home.component.css',
    '../../../assets/home/css/bootstrap.min.css',
    '../../../assets/home/css/style.css',
  ],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.makeScript()
    
  }

  makeScript(){
    const mainscript = document.createElement('script');
    mainscript.src = 'assets/home/js/main.js';

    document.body.appendChild(mainscript);
  }
  
}
