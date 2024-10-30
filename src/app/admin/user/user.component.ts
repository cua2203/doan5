import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  token = this.cookie.get('token');
  user:any;
  form!: FormGroup;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token, // Add your access token or any other headers here
    }),
  };

  constructor(private http: HttpClient,private cookie: CookieService,    private toastr: ToastrService, private fb: FormBuilder){

    this.form = this.fb.group({
      fullname: [null, [Validators.required, Validators.minLength(20), Validators.maxLength(35)]],
      email: [null, [Validators.required, Validators.email]],
      password: ['pass@12345', [Validators.required]],
      phone: [null, [Validators.required, Validators.minLength(10)]],
      role: ['User', Validators.required]
    
    });

  }
  ngOnInit(): void {
    this.getUser()
    console.log(this.form.value);
  }

  getUser() :void{

    this.http.get<any>('http://localhost:3001/api/user/getAll',this.httpOptions).subscribe(data=>{
      if(data.rs){
        this.user = data.data;
      }
      else{
        // this.toastr.error(data.message);

      }
      
    }, err => {
      console.log(err.error);
      this.toastr.error(err.error.message);
    })
  }
  onSubmit() : void {
    this.http.post<any>('http://localhost:3001/api/user/register',this.form.value,this.httpOptions).subscribe(data => {
      console.log(data);
      if(data.rs){
        this.toastr.success(data.message);
      }
      else{
        this.toastr.error(data.message);
      }
    })

  }




}
