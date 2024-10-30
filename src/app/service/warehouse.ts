import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IWarehouse } from '../model/warehouse.model';
import { Observable } from 'rxjs';
import { constant } from '../config';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class WareHouseService {
  api_url = constant.API_URL;

  constructor(private http: HttpClient, private cookie: CookieService) {}
  token = this.cookie.get('token');

  getAllWareHouse(): Observable<IWarehouse[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      }),
    };
    return this.http.get<IWarehouse[]>(this.api_url + 'warehouse/getAll', httpOptions);
  }




}