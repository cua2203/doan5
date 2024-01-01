import { Component } from '@angular/core';
import { IGetLaptop, Ipagination } from 'src/app/model/laptop.model';
import { LaptopService } from 'src/app/service/laptop';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  title="Laptop"
  Laptop:IGetLaptop[]=[];
  Variant!:any[];

  Pagination:Ipagination={
    searchString: "",
    pageIndex :1,
    pageSize :5,
    sort:1
  }

  constructor(private service:LaptopService){

  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.service.getAll(this.Pagination).subscribe((data)=>{this.Laptop=data;console.log(data)});
  }

  detail(id:number){
    this.service.getVariant(id).subscribe((data)=>{this.Variant=data})
  }

  pageSizeChange(){
    this.getProduct()
  }
  search(){
    this.getProduct();
  }
  sortChange(){
    this.Pagination.pageIndex=1;
    this.getProduct();

  }
  delete(id:number){
    this.service.delete(id).subscribe(()=>{
      this.getProduct();

    })
  }

}
