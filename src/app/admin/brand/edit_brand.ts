import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { constant } from 'src/app/config';
import { Ibrand } from 'src/app/model/brand';
import { brandService } from 'src/app/service/brand';

@Component({
  selector: 'add-brand',
  templateUrl: './edit_brand.html',
})
export class EditbrandComponent {
  title = 'brand';
  image!:string;
  brand!: Ibrand[];
  form!: FormGroup;
  id: any;
  constructor(
    private service: brandService,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      brand_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      image:['',[]],
      status: ['', []],
    });

    this.route.params.subscribe((params) => {
      this.id = params['id'];
      // Sử dụng giá trị `id` ở đây
    });

    this.getById(this.id);
  }
  choseImage(event: string) {
    console.log(event)
    this.form.get('image')?.setValue(constant.IMAGE_PATH+event);
    const modal = document.getElementById('largeModal');
    const fade = document.getElementsByClassName('modal-backdrop');
    (modal as HTMLElement).style.display='none';
    (fade[0] as HTMLElement).style.display = 'none';
  
  }

  getById(id: number) {
    this.service.getById(this.id).subscribe((data) => {
      console.log(data);
      this.form.get('brand_name')?.setValue(data.brand_name);
      this.form.get('image')?.setValue(data.image);
      this.form.get('status')?.setValue(data.status);
    });
  }

  onSubmit() {
    const cat = {brand_id:this.id,brand_name:this.form.value.brand_name,status:this.form.value.status,image:this.form.value.image};
    this.service.update(cat).subscribe(
      (data) => {
        this.router.navigate(['/admin/brand']), console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
