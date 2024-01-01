import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { orderService } from 'src/app/service/order';

@Component({
  selector: 'app-orderDetail',
  templateUrl: './orderDetail.html',
  styleUrls: ['./order.component.css']
})
export class OrderDetailComponent implements OnInit {

  OrderDetails:any[]=[]
  Orders:any
    id: any;

  constructor(private orderService: orderService,    private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.id = params['id'];
    })

    this.getOrderById(this.id)

    this.getOrderDetail()


   
  } 
  getOrderDetail(){
    this.orderService.getOrderDetail(this.id).subscribe((data)=>{this.OrderDetails=data.data;console.log(this.OrderDetails)})
    
  }
  getOrderById(id:any){
    this.orderService.getOrderById(id).subscribe((data:any)=>{this.Orders=data.data})
  }
  sendmail(){
    let  data={
      customer:this.Orders,
      order : this.OrderDetails
    }

    this.orderService.sendMail(data).subscribe((data)=>{console.log(data)})

  }





}
