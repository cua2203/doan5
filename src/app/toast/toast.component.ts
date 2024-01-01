import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div *ngFor="let toast of toasts" class="toast">
      {{ toast.message }}
      
    </div>
  `,
  styles: [`
    .toast {
      background-color: #333;
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      opacity: 0;
      display:block;
      transition: opacity 0.5s ease-in-out;
    }
  `],
})
export class ToastComponent {
  @Input() toasts!: any[];

  
}
