import { Component, OnInit } from '@angular/core';
import { orderService } from 'src/app/service/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  Orders:any[]=[]

  constructor(private orderService: orderService){

  }
  ngOnInit(): void {
    this.getAll()

   
  } 

  getAll(){
    this.orderService.getAll().subscribe((data)=>{this.Orders=data.data})
    
  }

  
  

}
