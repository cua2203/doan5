import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Icategory } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category';

@Component({
  selector: 'add-category',
  templateUrl: './edit_category.html',
})
export class EditCategoryComponent {
  title = 'Category';
  category!: Icategory[];
  form!: FormGroup;
  id: any;
  constructor(
    private service: CategoryService,
    private cookie: CookieService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getAll();
    this.form = this.fb.group({
      category_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      status: ['', []],
    });

    this.route.params.subscribe((params) => {
      this.id = params['id'];
      // Sử dụng giá trị `id` ở đây
    });

    this.getById(this.id);
  }

  getById(id: number) {
    this.service.getById(this.id).subscribe((data) => {
      console.log(data);
      this.form.get('category_name')?.setValue(data.category_name);
      this.form.get('status')?.setValue(data.status);
    });
  }

  getAll() {
    this.service.getAll().subscribe(
      (data: Icategory[]) => {
        this.category = data;
        console.log(this.category);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onSubmit() {
    const cat = {category_id:this.id,category_name:this.form.value.category_name,status:this.form.value.status};
    this.service.update(cat).subscribe(
      (data) => {
        this.router.navigate(['/admin/category']), console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
