import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IGetVariant, IVariant } from 'src/app/model/laptop.model';
import { LaptopService } from 'src/app/service/laptop';
import { constant, editor } from 'src/app/config';
import { Location } from '@angular/common';

@Component({
  selector: 'app-variant-edit',
  templateUrl: './variant-edit.html',

})
export class VariantEditComponent implements OnInit {
  title='ProductDetail';
  editorConfig = editor.editorConfig;
  id:number=0;

  form!: FormGroup;
  variant !:IVariant;


  constructor(private service:LaptopService,private location: Location,private cookie:CookieService,private router: Router,private fb: FormBuilder,private route: ActivatedRoute,){
    

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });

    this.form = this.fb.group({
      variant_id:[this.id,[Validators.required]],
      ram:['',[Validators.required]],
      storage:['',[Validators.required]],
      pin:['',Validators.required],
      cpu:['',[Validators.required]],
      var_image:['',[Validators.required]],
      description:['',[Validators.required]]

    })
    
     this.service.GetOneVariant(this.id).subscribe((data)=>{this.variant=data;
      this.form.setValue({
        variant_id:data.variant_id,
        ram: data.ram,
        storage:data.storage,
        pin: data.pin,
        cpu: data.cpu,
        var_image: data.image,
        description: data.description
        });
    
    },
    (error) => {
      console.error('Error fetching variant:', error);
    } )
  }

  onSubmit(){
    this.service.updateVariant(this.form.value).subscribe((data)=>{
      this.location.back();
    })

  }

  choseImage(event: string) {
    this.form.get('var_image')?.setValue(constant.IMAGE_PATH+event);
  }

}
