import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class Helper{

    constructor() { }
   
    getDateYYYYMMDD(date:Date):string {
        // Lấy thông tin năm, tháng và ngày từ đối tượng Date
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Cần thêm 1 vì tháng bắt đầu từ 0
        const day = String(date.getDate()).padStart(2, '0');
    
        // Kết hợp thành chuỗi định dạng "yyyy-mm-dd"
        return `${year}-${month}-${day}`;
    }
    getFirstDateOfMonth():string{
        const date = new Date();
        date.setDate(1);
        return this.getDateYYYYMMDD(date);
    }
}