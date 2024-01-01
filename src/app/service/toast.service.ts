import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: any[] = [];

  show(message: string) {
    this.toasts.push({ message });
    console.log("service",this.toasts)
    setTimeout(() => this.toasts.shift(), 3000); // Hiển thị trong 3 giây
  }
}
