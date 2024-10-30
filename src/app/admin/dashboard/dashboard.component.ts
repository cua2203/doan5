import { Component, OnInit } from '@angular/core';
import { orderService } from 'src/app/service/order';
import { SocketService } from 'src/app//service/socket';
import { ImportBillService } from 'src/app/service/importBill';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  month:number = 12;
  year:number = 2023;
  fromDate!:string;
  toDate!:string;

  DistinctOrderStatus:any;
  listOrderStatus:any;
  listCountOrder:any
  pieChartData:any;

  dateTime = new Date();
  total!:number;
  count!:number;
  totalImport!:number;
  data={
    month:this.month,
    year:this.year
  }


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartType = 'line';
  public barChartLegend = true;

  barChartLabels:any;
  barChartData :any
  // public barChartData = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  // ];

  userId = 'Admin'; // Thay đổi userId theo ý bạn

  constructor(private service : orderService,private socketService: SocketService, private importService: ImportBillService){
    let date = this.dateTime.getDate();
    let month = this.dateTime.getUTCMonth();
    let year = this.dateTime.getUTCFullYear();
  
    const date1 = new Date(year,month,1);
    const date2 = new Date();
    this.fromDate = this.formatDate(date1);
    this.toDate = this.formatDate(date2)
    console.log(this.toDate)

    this.reload();

  }

  reload(): void {
    this.countOrder();
    this.totalPrice();
    this.totalImportPrice();
    this.getDistinctOrderStatus();
    this.countProductSaled()

  }



  countOrder():Number{
    this.service.count(this.fromDate,this.toDate).subscribe(
      (data) => {
        this.count = data.data.count;
        console.log(this.count);
      },
      (error) => {
        console.log(error);
      }
    );
    return this.count;
  }

  totalImportPrice(): number {
    this.importService.total(this.fromDate,this.toDate).subscribe(
      (data) => {
        this.totalImport = data.data[0].total;
        console.log('import:',this.totalImport);
      },
      (error) => {
        console.log(error);
      }
    );
    return this.total;
  }

  totalPrice():Number{
    this.service.total(this.fromDate,this.toDate).subscribe(
      (data) => {
        this.total = data.data[0].total;
        console.log(this.total);
      },
      (error) => {
        console.log(error);
      }
    );
    return this.total;
  }

  getDistinctOrderStatus():any{
    this.service.getDistinctOrderStatus(this.fromDate,this.toDate).subscribe(
      (data) => {
        this.DistinctOrderStatus = data.data;
        this.listOrderStatus = this.DistinctOrderStatus.map((item :any) =>item.status)
        this.listCountOrder = this.DistinctOrderStatus.map((item :any)=>item.count);
        this.pieChartData = [{data:this.listCountOrder,label:'count'}];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  countProductSaled():any{
    this.service.countProductSaled(this.fromDate,this.toDate).subscribe(
      (data) => {
      console.log(data.data)
      let result = data.data;
      this.barChartLabels = result.map((item:any)=>item.laptop_name.slice(0,20));
      this.barChartData = [{data:result.map((item:any)=>item.count),label:'quantity'}];
     
   
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding leading zero
    const day = ('0' + date.getDate()).slice(-2); // Adding leading zero
    return `${year}-${month}-${day}`;
  }



  // public pieChartData = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  
  // ];

  


}
