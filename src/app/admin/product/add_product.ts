import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Ibrand } from 'src/app/model/brand';
import { Icategory } from 'src/app/model/category';
import { brandService } from 'src/app/service/brand';
import { CategoryService } from 'src/app/service/category';
import { LaptopService } from 'src/app/service/laptop';
import { constant, editor } from 'src/app/config';

@Component({
  selector: 'app-product-add',
  templateUrl: './add_product.html'
})
export class ProductAddComponent implements OnInit {
  title = 'Add Product';
  category!: any[];
  brand!: Ibrand[];
  form!: FormGroup;
  editorConfig = editor.editorConfig;

  constructor(
    private cateService: CategoryService,
    private cookie: CookieService,
    private brandService: brandService,
    private fb: FormBuilder,
    private productService: LaptopService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      laptop_name:['', [Validators.required]],
      image:['', [Validators.required]],
      category_id:['',[Validators.required]],
      brand_id:['',[Validators.required]],
      ram:['',[Validators.required]],
      storage:['',[Validators.required]],
      pin:['',Validators.required],
      cpu:['',[Validators.required]],
      var_image:['',[Validators.required]],
      description:['',[Validators.required]]

    })
    this.getAllCategory();
    this.getAllBrand();
  }
  onSubmit(){
    this.productService.add(this.form.value).subscribe((data)=>{console.log(data); this.router.navigate(['/admin/product'])},(error)=>{console.log(error)});

    console.log(this.form.value)

  }

  
  choseImage(event: string) {
    this.form.get('image')?.setValue(constant.IMAGE_PATH+event);
  
  }
  choseImage1(event: string) {
    this.form.get('var_image')?.setValue(constant.IMAGE_PATH+event);

  
  }

  getAllBrand(){
    this.brandService.getAll().subscribe(
      (data: Ibrand[]) => {
        this.brand = data;
        console.log(data)
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  getAllCategory() {
    this.cateService.getAll().subscribe(
      (data: Icategory[]) => {
        this.category = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  
}
