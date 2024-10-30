import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ISupplier  } from '../model/supplier.model';
import { Observable } from 'rxjs';
import { constant } from '../config';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  api_url = constant.API_URL;

  constructor(private http: HttpClient, private cookie: CookieService) {}
  token = this.cookie.get('token');

  getAllSupplier(): Observable<ISupplier[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      }),
    };
    return this.http.get<ISupplier[]>(this.api_url + 'supplier/getAll', httpOptions);
  }




}