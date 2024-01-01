import { Component, OnInit } from '@angular/core';
import { brandService } from 'src/app/service/brand';
import { CategoryService } from 'src/app/service/category';
import { LaptopService } from 'src/app/service/laptop';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css',   '../../../assets/home/css/bootstrap.min.css',
  '../../../assets/home/css/style.css',]
})
export class StoreComponent implements OnInit{
  Variant: any[] = [];
  Brands: any[] = [];
  Category: any[] = []
  totalPage:number=0;
  numbers: number[]=[]

  selectedBrandIds: number[] = []; 
  selectedCategoryIds: number[] = []; 
  query={
    pageIndex:1,
    pageSize:3,
    searchString:'',
    sort:1,
    brand_ids:this.selectedBrandIds,
    category_ids:this.selectedCategoryIds

  }

  constructor(private laptop : LaptopService ,private brand : brandService, private category : CategoryService){

  }
  ngOnInit(): void {
    this.GetVariant(this.query)
    this.GetBrand()
    this.GetCategory()
    this.makeScript()
    
  }
  GetVariant(data:any){
    console.log(data)
    this.laptop.GetAllVariant(data).subscribe((data)=>{this.Variant=data.data,
      this.totalPage= data.totalPage
      this.numbers = Array.from({ length: this.totalPage }, (_, index) => index + 1);
      // console.log(this.totalPage)
    })
  }
  setPage(page:number){
    this.query.pageIndex=page;
    this.GetVariant(this.query)

  }
  previousPage(){
    if(   this.query.pageIndex>1){
      this.query.pageIndex-=1;
      this.GetVariant(this.query)
    }
  }
  nextPage(){
    if(   this.query.pageIndex<this.totalPage){
      this.query.pageIndex+=1;
      this.GetVariant(this.query)
    }
  }

  GetBrand(){
    this.brand.getAll().subscribe((data)=>{this.Brands=data})
  }

  GetCategory(){
    this.category.getAll().subscribe((data)=>{this.Category=data})
  }

  pageSizeChange(){
    this.GetVariant(this.query)
  }
  sortChange(){
    this.GetVariant(this.query)
  }

  toggleBrandSelection(brandId: number): void {
    if (this.selectedBrandIds.includes(brandId)) {
      // If the brand ID is already in the array, remove it
      this.selectedBrandIds = this.selectedBrandIds.filter(brand_id => brand_id !== brandId);
      this.query.brand_ids=this.selectedBrandIds
      console.log(this.selectedBrandIds)
      
    } else {
      // If the brand ID is not in the array, add it
      this.selectedBrandIds.push(brandId);
      console.log(this.selectedBrandIds)
    }

    this.GetVariant( this.query)
  
    
  }
  toggleCategorySelection(Id: number): void {
    if (this.selectedCategoryIds.includes(Id)) {
      // If the brand ID is already in the array, remove it
      this.selectedCategoryIds = this.selectedCategoryIds.filter(category_id => category_id !== Id);
      this.query.category_ids = this.selectedCategoryIds
    } else {
      // If the brand ID is not in the array, add it
      this.selectedCategoryIds.push(Id);
     
    }
    
    this.GetVariant( this.query)
    
  }



  makeScript(){
    const mainscript = document.createElement('script');
    mainscript.src = 'assets/home/js/main.js';

    document.body.appendChild(mainscript);
  }

}
