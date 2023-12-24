import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { constant } from 'src/app/config';
import { Ibrand } from 'src/app/model/brand';
import { brandService } from 'src/app/service/brand';

@Component({
  selector: 'add-brand',
  templateUrl: './add_brand.html',

})
export class AddbrandComponent {
  title = 'brand';
  image='image.png'
  brand!: Ibrand[];
  form!: FormGroup ;
  constructor(
    private service: brandService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      brand_name:['', [Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      image:['',[Validators.required]],
      status:['',[]]

    })
  }

  choseImage(event: string) {
    this.form.get('image')?.setValue(constant.IMAGE_PATH+event);
    const modal = document.getElementById('largeModal');
    const fade = document.getElementsByClassName('modal-backdrop');
    (modal as HTMLElement).style.display='none';
    (fade[0] as HTMLElement).style.display = 'none';
  
  }

  onSubmit() {    
    const cat = {brand_name:this.form.value.brand_name,status:this.form.value.status,image:this.form.value.image};
    this.service.add(cat).subscribe((data)=>{console.log(data)},(error)=>{console.log(error)});
    this.router.navigate(['/admin/brand'])

  }



  


}
