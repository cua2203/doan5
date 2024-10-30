import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportBillService {

  constructor(private http: HttpClient, private cookie: CookieService) {}

  private createHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

    create(bill:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post(
      'http://localhost:3001/api/import/create',
      bill,
      httpOptions
    );
  }


  getByDate(from:any,to:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };


    return this.http.post(
      'http://localhost:3001/api/import/getByDate',
      {fromDate:from, toDate:to},
      httpOptions
    );
  }

  getDetail(id:Number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };


    return this.http.get(
      'http://localhost:3001/api/import/detail/'+ id ,
      httpOptions
    );
  }

  total(from:any,to:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };


    return this.http.post(
      'http://localhost:3001/api/import/total' ,
      {fromDate:from, toDate:to},
      httpOptions
    );
  }
}
