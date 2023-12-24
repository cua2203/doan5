import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Iuser } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private cookie: CookieService) { }

  login(email:string,password:string):any{
    const user = {email:email,password:password};
    return this.http.post('http://localhost:3001/api/user/login',user);
  }

 register(user:Iuser):any{
    return this.http.post('http://localhost:3001/api/user/register',user);
  }

  isLoggedIn():boolean{
    if(!this.cookie.get('token'))
        return false;
    const data = this.cookie.get('roles');
    if(data!='Admin' && data!='User')
        return false;
    return true
  }
}
