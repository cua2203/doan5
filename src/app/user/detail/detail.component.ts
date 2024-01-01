import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGetVariant, IVariant } from 'src/app/model/laptop.model';
import { CartService } from 'src/app/service/cart';
import { LaptopService } from 'src/app/service/laptop';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css',
    '../../../assets/home/css/bootstrap.min.css',
    // '../../../assets/home/css/slick.css',
    // '../../../assets/home/css/slick-theme.css',
    // '../../../assets/home/css/nouislider.min.css',
    // '../../../assets/home/css/font-awesome.min.css',
    '../../../assets/home/css/style.css',]
})
export class DetailComponent implements OnInit {

  id!:number;
  Variants!:IGetVariant[];
  variant! : IGetVariant;


  constructor(

    private route: ActivatedRoute,   private service: LaptopService,private cartService: CartService,public toastService: ToastService

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      
    });
    this.getVariants();

    
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.toastService.show('Đã thêm sản phẩm vào giỏ hàng')
    console.log("detail",this.toastService.toasts)
  }

  chose(i:any){
    this.variant =this.Variants[i]; 
  }

  getVariants(){
    this.service.GetVariantByLaptopId(this.id).subscribe((data:any)=>{this.Variants=data;this.variant=this.Variants[0];   this.makeScript();console.log(this.Variants[0])})
 
  }
   makeScript(){
    const mainscript = document.createElement('script');
    mainscript.src = 'assets/home/js/main.js';
    document.body.appendChild(mainscript);
  }

}
