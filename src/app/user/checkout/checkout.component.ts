import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart';
import { CheckoutService } from 'src/app/service/checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css',    '../../../assets/home/css/bootstrap.min.css',
  // '../../../assets/home/css/slick.css',
  // '../../../assets/home/css/slick-theme.css',
  // '../../../assets/home/css/nouislider.min.css',
  // '../../../assets/home/css/font-awesome.min.css',
  '../../../assets/home/css/style.css',]
  
})
export class CheckoutComponent implements OnInit {

  items: any[] = [];
  total:number = 0;
  form!: FormGroup ;

  constructor(private cartService: CartService,private fb: FormBuilder,private checkoutService: CheckoutService,   private router: Router,) {
   
  }

  ngOnInit() {

    this.form = this.fb.group({
      fullname:['Phạm Văn Của', [Validators.required,Validators.minLength(12),Validators.maxLength(45)]],
      email:['phamcua670@gmail.com',[Validators.required,Validators.email]],
      address:['Vân NGhệ, Mai Động, KIm Động, Hưng Yên',[Validators.required,Validators.minLength(10),Validators.maxLength(45)]],
      phone: ['0364141625',[Validators.required,Validators.minLength(10)]]

    })
   this.items = this.cartService.getSelectedItems();
   this.items.forEach(element => {
    this.total += element.cartQuantity*element.price    
   });

   console.log(this.items)
  }

  async onSubmit() {
    let data = {
      order: this.form.value,
      orderDetail: this.items
    };
  
    console.log(data);
  
    try {
      let result = await this.checkoutService.CreateOrder(data).toPromise().then(()=>{this.cartService.clearCartAfterCheckout();this.router.navigate(['/user/cart'])}  );
    
    } catch (error) {
      console.error(error);
    }
  }

  submit(){
    this.onSubmit()
  }



  

}
