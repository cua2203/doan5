import { Component, OnInit } from '@angular/core';
import { Ipagination } from 'src/app/model/laptop.model';
import { orderService } from 'src/app/service/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  Orders:any[]=[]

  Pagination:Ipagination={
    searchString: "",
    pageIndex :1,
    pageSize :5,
    sort:1,
    isActive:1
  }
  totalPage: any;
  numbers!: number[];

  constructor(private orderService: orderService){

  }
  ngOnInit(): void {
    this.getAll()
  } 
  getAll(){
    this.orderService.getAll().subscribe((data)=>{this.Orders=data.data})
  }

  setPage(page:number){
    this.Pagination.pageIndex=page;
    this.getAll()

  }

  previousPage(){
    if(   this.Pagination.pageIndex>1){
      this.Pagination.pageIndex-=1;
      this.getAll()    }
  }
  nextPage(){
    if(   this.Pagination.pageIndex<this.totalPage){
      this.Pagination.pageIndex+=1;
      this.getAll()   }
  }

  pageSizeChange(){
    this.getAll()
  }
  search(){
    this.getAll()  }
  sortChange(){
    this.Pagination.pageIndex=1;
    this.getAll()  }

  
  

}
