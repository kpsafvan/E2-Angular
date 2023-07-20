import { Component, OnInit } from '@angular/core';
import { ProductListService } from './Services/ProductListService.Service';
import { image } from './Models/image';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  TableData: Array<image> = [];
  id = 2;
  ProductData = [];
  display: Array<{
    id: number;
    image: string;
    description: string;
    price: number;
    name: string;
  }> = [];
  priceFiltered :number[]=[];
  lowToHighBool = false;
  highToLowBool = false;
  nameSortBool = false;
  imagestring = 'data:image/png;base64,';
  booltest = false;
  constructor(private ProductListService: ProductListService) {}

  ngOnInit(): void {
    // this.fetchAll();
    this.getProductDetails();
    
  }
  bool() {
    this.booltest = !this.booltest;
  }
  lowToHigh() {
    this.display = this.display.sort((a, b) => a.price - b.price);
    this.lowToHighBool = true;
    this.highToLowBool = false;
    this.nameSortBool = false;
  }
  highToLow() {
    this.lowToHighBool = false;
    this.highToLowBool = true;
    this.nameSortBool = false;
    this.display = this.display.sort((a, b) => b.price - a.price);
  }
  nameSort() {
    this.lowToHighBool = false;
    this.highToLowBool = false;
    this.nameSortBool = true;
    this.display = this.display.sort((a, b) => a.name.localeCompare(b.name));
  }
  priceFilter(minPrice:number,maxPrice:number){
    this.display.forEach(item => {
      console.log(item);
      if (item.price >= minPrice && item.price <= maxPrice) {
        this.priceFiltered.push(item.id);
      }
    });
    console.log("priceFiltered:", this.priceFiltered);
    console.log("display:", this.display);
    console.log("priceFiltered:", maxPrice,minPrice);
  
  }
  // fetchData() {
  //   this.ProductListService.getData(this.id)
  //     .subscribe
  //     ({
  //       next: (result: any) => {
  //         console.log(result);
  //         this.imagestring+=result.imageData;
  //         this.TableData=result;
  //       },
  //       error: (err: any) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //         console.log('complete');
  //       },
  //     });
  // }

  fetchAll() {
    this.ProductListService.getAll().subscribe({
      next: (result: any) => {
        console.log(result);
        //this.imagestring+=result.imageData;
        //this.TableData=result;
        this.Convert(result);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  getProductDetails() {
    this.ProductListService.getProduct().subscribe({
      next: (result: any) => {
        console.log('produt', result);
        this.ProductData = result;
        this.Convert(result);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  Convert(images: any) {
    images.forEach((element: any) => {
      this.display.push({
        id: element.productId,
        image: 'data:image/png;base64,' + element.imageData,
        description: element.description,
        name: element.name,
        price: element.price,
      });
    });
    this.priceFilter(0,100000)
  }
  
}
