import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IGetVariant, Ipagination } from 'src/app/model/laptop.model';
import { ImportBillService } from 'src/app/service/importBill';
import { LaptopService } from 'src/app/service/laptop';
import { constant, editor } from 'src/app/config';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',

})
export class ProductDetailComponent implements OnInit {
  title = 'ProductDetail';
  editorData: string = '';
  editorConfig = editor.editorConfig;
  form!: FormGroup;
  quantity!: number;
  price!: number;
  variant_id!: number;

  Variant!: IGetVariant[];
  id: number = 0;

  constructor(private service: LaptopService, private cookie: CookieService, private importService: ImportBillService, private fb: FormBuilder, private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });

    this.form = this.fb.group({
      laptop_id: [this.id, []],
      ram: ['', [Validators.required]],
      storage: ['', [Validators.required]],
      pin: ['', Validators.required],
      cpu: ['', [Validators.required]]
    })
    this.service.getVariant(this.id).subscribe((data) => { this.Variant = data; console.log(this.Variant) });
  }

  onSubmit() {
    this.service.addVariant(this.form.value).subscribe((data) => { console.log(data); this.detail(this.id) })

  }
  onDelete(id: number) {
    if (confirm("Delete this variant ?")) {
      this.service.deleteVariant(id).subscribe(() => { this.detail(this.id) })

    }
  }
  onClick(id: number) {
    this.variant_id = id;
  }
  // onImport() {
  //   let user_id = this.cookie.get('user_id');


  //   let bill = {
  //     user_id:user_id,
  //     variant_id: this.variant_id,
  //     quantity: this.quantity,
  //     price: this.price
  //   }
  //   this.importService.create(bill).subscribe((err)=>{console.log(err)})

  // }



  detail(id: number) {
    this.service.getVariant(id).subscribe((data) => { this.Variant = data });
  }



}
