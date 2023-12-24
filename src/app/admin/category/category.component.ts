import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Icategory } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',

})
export class CategoryComponent {
  title = 'Category';
  category!: Icategory[];
  constructor(
    private service: CategoryService,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(
      (data: Icategory[]) => {
        this.category = data;
        console.log(this.category)
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
