import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WareHouseService} from '../../service/warehouse';
import { SupplierService} from '../../service/supplier';
import { IWarehouse } from '../../model/warehouse.model';
import { ISupplier } from '../../model/supplier.model';
import { LaptopService } from 'src/app/service/laptop';
import { ImportBillService } from 'src/app/service/importBill';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

import {Helper} from '../../common/helper'



@Component({
  selector: 'app-import-bill',
  templateUrl: './import-bill.component.html',
  styleUrls: ['./import-bill.component.css']
})
export class ImportBillComponent implements OnInit {
  

  form!: FormGroup;
  warehouse :IWarehouse[] = [];
  suppliers : ISupplier[] = [];
  variants : any[] = [];
  select2Options = {
    placeholder: 'Select an option',
    allowClear: true
  };
  importBills : any[] = [];
  importDetail : any[] = [];
  fromDate!:string;
  toDate!:string;

  constructor(private wareHouse :WareHouseService,
     private supplier : SupplierService,
     private laptopService: LaptopService,
     private fb: FormBuilder,
     private importBillService : ImportBillService,
     private cookieService : CookieService,
     private toastr: ToastrService,
     private helper : Helper

    )
    {
       
   

    this.form = this.fb.group({
      warehouse_id: [null, Validators.required],
      supplier_id: [null, Validators.required],
      blocks: this.fb.array([this.createBlock()]),
    
    });
    let dateTime = new Date();
    let month = dateTime.getUTCMonth();
    let year = dateTime.getUTCFullYear();
  
    const date1 = new Date(year,month,1);
    const date2 = new Date();
    this.fromDate = this.formatDate(date1);
    this.toDate = this.formatDate(date2)

  }

  ngOnInit(): void {
    this.getAllWareHouse();
    this.getAllSupplier();
    this.getAllVariant();

    let fromDate = this.helper.getFirstDateOfMonth()
    let toDate = this.helper.getDateYYYYMMDD(new Date())
    this.getAllImportBill(fromDate, toDate)
    

  }

  getAllImportBill(from:any,to:any):any {
    this.importBillService.getByDate(from,to).subscribe((data)=>{this.importBills=data.data})
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding leading zero
    const day = ('0' + date.getDate()).slice(-2); // Adding leading zero
    return `${year}-${month}-${day}`;
  }


  get blocks(): FormArray {
    return this.form.get('blocks') as FormArray;
  }

  createBlock(): FormGroup {
    return this.fb.group({
      variant_id: [null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: ['', Validators.required]
    });
  }

  openModal(id:Number): void {
    this.importBillService.getDetail(id).subscribe(data => { 

      if(data.rs){
        this.importDetail = data.data;

      }
    });


  }

  async onSubmit(): Promise<void> {

    let user_id = Number(this.cookieService.get('user_id'));
   
    let bill = {
      user_id:user_id,
      warehouse_id: this.form.value.warehouse_id,
      supplier_id: this.form.value.supplier_id,
      blocks: this.form.value.blocks
    }
    if (this.form.valid) {
      this.importBillService.create(bill).subscribe(
        (data: any) => {
          
          if(!data.rs){
            this.toastr.error('', data.message, {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            });
          }
          this.toastr.success('Thành công', '', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
          });
  
          this.form.reset();
        },
        (err: any) => {
          console.log(err);
        }
      )

    }
    else{
      this.toastr.warning('', 'Vui lòng nhập đầy đủ thông tin', {
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
      });
    }
   
  
   }

  addBlock(): void {
    this.blocks.push(this.createBlock());
    
  }

  removeBlock(index: number): void {
    this.blocks.removeAt(index);
  }


  getAllWareHouse(){
    this.wareHouse.getAllWareHouse().subscribe(
      (data: any) => {
        this.warehouse = data.data;
        console.log(data)
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  getAllSupplier(){
    this.supplier.getAllSupplier().subscribe(
      (data: any) => {
        this.suppliers = data.data;
        console.log(data)
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  
  getAllVariant(){

    this.laptopService.getAllVariantWithoutPrice().subscribe(
      (data: any) => {
        this.variants = data.data;
        console.log(data)
      },
      (err: any) => {
        console.log(err);
      }
    );
  };



}
