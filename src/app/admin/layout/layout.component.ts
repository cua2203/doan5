import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SocketService } from 'src/app//service/socket';
import { ToastrService } from 'ngx-toastr';
import { commentService } from 'src/app/service/comment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewInit{

  userId = 'Admin'; // Thay đổi userId theo ý bạn
  role_name : any;

  notifications :any[]=[]

  userName : any;

  constructor(
    private cookie: CookieService,
    private socketService: SocketService,
     private toastr: ToastrService,
     private commentService: commentService,
      private router : Router,
      private http: HttpClient
    ){
     // Đăng ký userId với server khi component được khởi tạo
     this.socketService.register(this.userId);

     // Lắng nghe thông báo từ server
     this.socketService.getMessage().subscribe((message: string) => {
       console.log('Notification received:', message);
       this.toastr.success('', message, {
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
      });
      this.commentService.getAllNotification().subscribe(
        (data: any) => {console.log('Notification received:', data),this.notifications = data.results, console.log(this.notifications);}
      )
     });

       // Đăng ký userId với server khi component được khởi tạo
    this.socketService.register(this.userId);

    this.commentService.getAllNotification().subscribe(
      (data: any) => {console.log('Notification received:', data),this.notifications = data.results, console.log(this.notifications);}
    )

  }

  ngOnInit(): void {
    
    let id = this.cookie.get('user_id');
    this.getUserById(id);
  }

  getUserById(id: string):void{
    this.http.get(`http://localhost:3001/api/user/get/${id}`).subscribe(
      (data: any) => {
        this.userName = data.data.username
        this.role_name = data.data.role_name
      },
      (err: any) => {
        console.log(err);
      }
    );

  }
  ngAfterViewInit(): void {
    const mainscript = document.createElement('script');
    mainscript.src = 'assets/js/main.js';
    document.body.appendChild(mainscript);
    
  }

  logOut(){
    try{
      this.cookie.delete('token', '/','localhost', undefined,"Lax");
      this.cookie.delete('user_id', '/','localhost', undefined,"Lax");
      this.cookie.delete('roles', '/','localhost', undefined,"Lax");
      this.router.navigate(['/login']);

    }
    catch(e){
      console.log(e)
    } 
  }
    // Hàm gửi thông báo đến người dùng cụ thể
    sendNotification() {
      const recipientUserId = 'user456'; // Thay đổi recipientUserId theo ý bạn
      const message = 'Hello, this is a notification!';
      this.socketService.sendNotification(recipientUserId, message);
    }

    

}
