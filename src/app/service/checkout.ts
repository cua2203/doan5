import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { constant } from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
    api_url = constant.API_URL;

    constructor(private http: HttpClient, private cookie: CookieService) {}

    CreateOrder(data:any):Observable<any>{

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
          };
       return this.http.post<any>(this.api_url + 'order/create',data,httpOptions)

    }



 

}