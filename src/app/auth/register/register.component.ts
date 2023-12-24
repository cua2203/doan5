import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/service/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form!: FormGroup;
 
  constructor(private service:AuthService,private router: Router,private fb: FormBuilder,private cookie: CookieService){
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      email:['', [Validators.required,Validators.minLength(10),Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]],
      username:['',[Validators.required,Validators.minLength(8)]],
      phone_number:['',[Validators.required,Validators.minLength(10)]],
      role_id:[3,[]]

    })
  }
  onSubmit(){
    this.service.register(this.form.value).subscribe((data:any)=>{console.log(data)})
  }

}
