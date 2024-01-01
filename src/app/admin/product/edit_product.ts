import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Ibrand } from 'src/app/model/brand';
import { Icategory } from 'src/app/model/category';
import { brandService } from 'src/app/service/brand';
import { CategoryService } from 'src/app/service/category';
import { LaptopService } from 'src/app/service/laptop';
import { constant, editor } from 'src/app/config';

@Component({
  selector: 'app-product-edit',
  templateUrl: './edit_product.html',
})
export class ProductEditComponent {
  title = 'Edit Product';
  category!: any[];
  brand!: Ibrand[];
  form!: FormGroup;
  id!: number;

  constructor(
    private cateService: CategoryService,
    private cookie: CookieService,
    private brandService: brandService,
    private fb: FormBuilder,
    private productService: LaptopService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });

    this.form = this.fb.group({
      id:['',[]],
      laptop_name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      brand_id: ['', [Validators.required]],
    });

    this.productService
      .GetById(this.id)
      .subscribe((data) => {
        this.form.setValue({
          id:this.id,
          laptop_name: data.laptop_name,
          image: data.image,
          category_id: data.category_id,
          brand_id: data.brand_id
        });
      });
    this.getAllCategory();
    this.getAllBrand();
  }
  onSubmit() {
    this.productService
      .update(this.form.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/admin/product']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  choseImage(event: string) {
    this.form.get('image')?.setValue(constant.IMAGE_PATH + event);

  }

  choseImage1(event: string) {
    this.form.get('var_image')?.setValue(constant.IMAGE_PATH + event);
  }

  getAllBrand() {
    this.brandService.getAll().subscribe(
      (data: Ibrand[]) => {
        this.brand = data;
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

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
