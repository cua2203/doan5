import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Icategory } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category';

@Component({
  selector: 'add-category',
  templateUrl: './add_category.html',

})
export class AddCategoryComponent {
  title = 'Category';
  category!: Icategory[];
  form!: FormGroup ;
  constructor(
    private service: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      category_name:['', [Validators.required,Validators.minLength(3),Validators.maxLength(100)]]

    })
  }

  onSubmit() {    
    const cat = {category_name:this.form.value.category_name,status:this.form.value.status};
    this.service.add(cat).subscribe((data)=>{console.log(data)},(error)=>{console.log(error)});
    this.router.navigate(['/admin/category'])

  }



  


}
