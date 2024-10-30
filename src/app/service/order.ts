import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constant } from '../config';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class orderService {
  api_url = constant.API_URL;

  constructor(private http: HttpClient, private cookie: CookieService) {}
  token = this.cookie.get('token');

  getAll(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.get<any>(this.api_url + 'order/getAll', httpOptions);
  }

  count(fromDate:any,toDate:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    const body = {
      fromDate: fromDate,
      toDate: toDate,
    }
    return this.http.post<any>(this.api_url + 'order/count',body, httpOptions);
  }

  total(from:any,to:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    const body = {
      fromDate: from,
      toDate: to,
    }
    return this.http.post<any>(this.api_url + 'order/total',body, httpOptions);
  }

  getOrderById(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.get<any>(this.api_url + 'order/getById/'+id, httpOptions);
  }

  getOrderDetail(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.get<any>(this.api_url + 'order/OrderDetail/'+id, httpOptions);
  }

  sendMail(data:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };

    return this.http.post<any>(this.api_url + 'order/sendMail',data, httpOptions,);

  }

  getOrderStatusByID(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.get<any>(this.api_url + 'order/status/'+id, httpOptions);
  }

  excute(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.put<any>(this.api_url + 'order/process/'+id, httpOptions);
  }

  cancel(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.put<any>(this.api_url + 'order/cancel/'+id, httpOptions);
  }

  
  getDistinctOrderStatus(from:any,to:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.post<any>(this.api_url + 'order/getDistinctOrderStatus',{from:from,to:to}, httpOptions);
  }

  countProductSaled(from:any,to:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.post<any>(this.api_url + 'order/countProductSaled',{from:from,to:to}, httpOptions);
  }

  
}
