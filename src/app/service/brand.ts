import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ibrand } from '../model/brand';
import { Observable } from 'rxjs';
import { constant } from '../config';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class brandService {
  api_url = constant.API_URL;

  constructor(private http: HttpClient, private cookie: CookieService) {}
  token = this.cookie.get('token');

  getAll(): Observable<Ibrand[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.get<Ibrand[]>(this.api_url + 'brand/getAll', httpOptions);
  }
  
  add(brand: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.post(this.api_url + 'brand/add', brand, httpOptions);
  }

  getById(id: number): Observable<Ibrand> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.get<Ibrand>(
      this.api_url + 'brand/getById/' + id,
      httpOptions
    );
  }
  update(brand: Ibrand): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.post(this.api_url + 'brand/update', brand, httpOptions);
  }

  delete(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.delete(this.api_url + 'brand/delete/' + id, httpOptions);
  }
}
