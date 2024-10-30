import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constant } from '../config';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class commentService {
  api_url = constant.API_URL;

  constructor(private http: HttpClient) {}


  getAll(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<any[]>(this.api_url + 'comment/getAll', httpOptions);
  }
  create(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(this.api_url + 'comment/create', data, httpOptions);
  }

  getById(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
    };
    return this.http.get<any>(
      this.api_url + 'comment/getById/' + id,
      httpOptions
    );
  }

  getAllNotification(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      }),
    };
    return this.http.get<any>(
      this.api_url + 'comment/get_notification' ,
      httpOptions
    );
  }
  
}
