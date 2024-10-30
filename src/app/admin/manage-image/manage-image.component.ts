import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-manage-image',
  templateUrl: './manage-image.component.html',
  styleUrls: ['./manage-image.component.css'],
})
export class ManageImageComponent implements OnInit {
  imagePaths: string[] = [];
  FileSelected!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getImage();
    // Gọi API để lấy danh sách ảnh
  }

  getImage() {
    this.http
      .get<string[]>('http://localhost:3001/api/upload/getImage')
      .subscribe((data) => {
        this.imagePaths = data;
        console.log(data);
      });
  }

  onFileSelected(event: any) {
    // const file:File = event.target;
    this.FileSelected = event;
  }
  upload(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.http
      .post('http://localhost:3001/api/upload/single?des=category', formData)
      .subscribe(() => {
        this.getImage();
      });
  }

  onDelete() {
    this.http
      .post(
        'http://localhost:3001/api/upload/delete/' + this.FileSelected,
        null
      )
      .subscribe(() => {});
    this.getImage();
    this.FileSelected = '';
  }

  @Output() doubleClick: EventEmitter<string> = new EventEmitter();

  onDoubleClick(imagePath: string) {
    this.doubleClick.emit(imagePath);
  }
}
