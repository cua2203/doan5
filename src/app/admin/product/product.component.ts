import { Component } from '@angular/core';
import { IGetLaptop, Ipagination } from 'src/app/model/laptop.model';
import { LaptopService } from 'src/app/service/laptop';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  title="Thông tin laptop"
  Laptop:IGetLaptop[]=[];
  Variant!:any[];


  Pagination:Ipagination={
    searchString: "",
    pageIndex :1,
    pageSize :5,
    sort:1,
    isActive:1
  }
  totalPage: any;
  numbers!: number[];

  constructor(private service:LaptopService){

  }
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.service.getAll(this.Pagination).subscribe((data)=>{this.Laptop=data.data;this.totalPage = data.totalPage
      this.numbers = Array.from({ length: this.totalPage }, (_, index) => index + 1);});
  }

  detail(id:number){
    this.service.getVariant(id).subscribe((data)=>{this.Variant=data})
  }

  setPage(page:number){
    this.Pagination.pageIndex=page;
    this.getProduct()

  }

  previousPage(){
    if(   this.Pagination.pageIndex>1){
      this.Pagination.pageIndex-=1;
      this.getProduct()    }
  }
  nextPage(){
    if(   this.Pagination.pageIndex<this.totalPage){
      this.Pagination.pageIndex+=1;
      this.getProduct()    }
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
    this.service.delete(id).subscribe((data)=>{
      console.log(data)
      this.getProduct();
    }
    )
  }

}
