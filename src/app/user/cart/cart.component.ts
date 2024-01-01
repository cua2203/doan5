import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }

  decrease(id:number){
    this.cartService.decreaseQuantity(id)
  }
  increase(id:number){
    this.cartService.increaseQuantity(id)
  }
  delete(id:number){
    this.cartService.removeFromCart(id)
  }
  selecting(id:number){
    this.cartService.toggleSelect(id)
  }


}
