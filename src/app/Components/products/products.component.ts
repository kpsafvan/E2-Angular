import { Component, OnInit } from '@angular/core';

import { product } from './Models/Product';
import { ProductService } from './Services/ProductService.Service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  TableData: Array<product> = [];
  abc ='';
  constructor(private ProductService: ProductService) { }
  
  ngOnInit(): void {
    this.TableData=[];
    this.fetchData();

   // this.abc=this.TableData[0].name;
  }
  fetchData() {
    this.ProductService.getData()
      .subscribe 
      ({
        next: (result: any) => {
          console.log(result);
          this.TableData=result;
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

}
