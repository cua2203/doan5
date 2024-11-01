import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/service/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
 
  constructor(private service:AuthService,private router: Router,private fb: FormBuilder,private cookie: CookieService){
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      email:['phamcua@gmail.com', [Validators.required,Validators.minLength(10),Validators.email]],
      password:['cua12345', [Validators.required,Validators.minLength(8)]]

    })
  }
  
  onSubmit() {
    this.service
      .login(
        this.form.value.email,this.form.value.password
      )
      .subscribe((data: any) => {
 
        this.cookie.set('user_id', data.user_id,1,'/','localhost',true,'Lax');
        this.cookie.set('roles', data.roles,1,'/','localhost',true,'Lax');
        this.cookie.set('token', data.token,1,'/','localhost',true,'Lax');
        console.log(data.roles)
        if(data.roles.includes('User') || data.roles.includes('Admin'))
            this.router.navigate(['/admin']);
        else 
            this.router.navigate(['/']);
      },
      (err:any)=>{
        console.log(err);
        alert('Tài khoản hoặc mật khẩu không chính xác !')
     
      });
}

}
