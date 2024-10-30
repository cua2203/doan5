import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  constructor( private http: HttpClient){

  }
  ngOnInit(): void {
    this.getWareHouse()
    
  }

  warehouses: any[] = [];

  getWareHouse(){
    this.http.get<any>('http://localhost:3001/api/warehouse/getAll').subscribe(data => {
      if(data.rs ){
        this.warehouses = data.data;

      }
 
      
      console.log(data)
    });
  }


}
