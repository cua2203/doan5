import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Ibrand } from 'src/app/model/brand';
import { brandService } from 'src/app/service/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',

})
export class BrandComponent {
  title = 'brand';
  brand!: Ibrand[];
  constructor(
    private service: brandService,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(
      (data: Ibrand[]) => {
        this.brand = data;
        console.log(this.brand)
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  delete(id:number){
    if(confirm('Bạn có chắc muốn xóa ?')){

      this.service.delete(id).subscribe((data)=>{this.getAll();console.log(data)},(error)=>{console.log(error)})
    }

  }


}
