import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  Suppliers: any;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getSupplier();
  }

  getSupplier() :void{
    this.http.get<any>('http://localhost:3001/api/supplier/getAll').subscribe(data=>{
      console.log(data);
      this.Suppliers = data.data;
    })
  }

}
