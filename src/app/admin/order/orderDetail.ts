import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { orderService } from 'src/app/service/order';

@Component({
  selector: 'app-orderDetail',
  templateUrl: './orderDetail.html',
  styleUrls: ['./order.component.css'],
})
export class OrderDetailComponent implements OnInit {
  OrderDetails: any[] = [];
  Orders: any;
  id: any;
  OrderStatus: any[] = [];

  constructor(
    private orderService: orderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getOrderById(this.id);
    this.getOrderDetail();
    this.getOrderStatusByID(this.id);
  }

  excute() {
    this.orderService.excute(this.id).subscribe((data) => {
      console.log(data);
    });

    if (
      this.OrderStatus[this.OrderStatus.length - 1].new_status === 'Processing'
    ) {
      this.sendmail();
    }
  }

  cancel() {
    this.orderService.cancel(this.id).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });
  }
  getOrderDetail() {
    this.orderService.getOrderDetail(this.id).subscribe((data) => {
      this.OrderDetails = data.data;
    });
  }
  getOrderById(id: any) {
    this.orderService.getOrderById(id).subscribe((data: any) => {
      this.Orders = data.data;
    });
  }
  sendmail() {
    let data = {
      customer: this.Orders,
      order: this.OrderDetails,
    };

    this.orderService.sendMail(data).subscribe((data) => {
      console.log(data);
    });
  }

  getOrderStatusByID(id: any) {
    return this.orderService.getOrderStatusByID(id).subscribe((data) => {
      this.OrderStatus = data.data;
      console.log(data);
    });
  }

  reloadPage() {
    this.router.navigate([this.router.url]);
  }
}
