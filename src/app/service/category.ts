import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Icategory } from '../model/category';
import { Observable } from 'rxjs';
import { constant } from '../config';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
    api_url = constant.API_URL;

  constructor( private http:HttpClient,private cookie: CookieService,) { }
  token = this.cookie.get('token');
  
  

  getAll(): Observable<Icategory[]>{
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.token, // Add your access token or any other headers here
      })
    };
    return this.http.get<Icategory[]>(this.api_url+'category/getAll',httpOptions);
  }
  add(category:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.token, // Add your access token or any other headers here
      })
    };
    return this.http.post(this.api_url+'category/add',category,httpOptions);
  }

  getById(id: number): Observable<Icategory> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
      }),
    };
    return this.http.get<Icategory>(
      this.api_url+'category/getById/' + id,
      httpOptions
    );
  }
  update(category:Icategory):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.token, // Add your access token or any other headers here
      })
    };
    return this.http.post(this.api_url+'category/update',category,httpOptions);

  }

  
  delete(id:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.token, // Add your access token or any other headers here
      })
    };
    return this.http.delete(this.api_url+'category/delete/'+id,httpOptions);

  }
}