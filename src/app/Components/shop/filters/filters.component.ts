import { Component, OnInit } from '@angular/core';
import { FiltersService } from './Services/FiltersService.Service';
import {
  BrandFilter,
  Category,
  CategoryFilter,
  Product,
} from './Models/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  priceFilterMin = 0;
  priceFilterMax = 10000;
  Data = [];
  showBrandFilter: boolean = false;
  showCategoryFilter: boolean = false;
  mappedCategories: CategoryFilter[] = [];
  mappedBrands: BrandFilter[] = [];
  selectedRange: number[] = [0, 100];
  constructor(private FiltersService: FiltersService) {}

  ngOnInit(): void {
    this.getCategory();
    this.getBrands();
  }
  onMinSliderChange() {
    if (this.priceFilterMax <= this.priceFilterMin) {
      this.priceFilterMax = this.priceFilterMin + 1;
    }
    if (this.priceFilterMin == 10000) {
      this.priceFilterMax = 10000;
      this.priceFilterMin = 9999;
    }
  }
  onMaxSliderChange() {
    if (this.priceFilterMax <= this.priceFilterMin) {
      this.priceFilterMin = this.priceFilterMax - 1;
    }

    if (this.priceFilterMax == 0) {
      this.priceFilterMax = 1;
      this.priceFilterMin = 0;
    }
  }
  filterUpdate() {}
  getCategory() {
    this.FiltersService.getCategory().subscribe({
      next: (result: any) => {
        console.log(result);
        this.Data = result;
        this.mappedCategories = (this.Data as Category[])
          .filter((category) => !category.isDeleted)
          .map((category) => {
            return {
              category: category.name,
              isSelected: false,
              categoryId: category.categoryId,
            };
          });
        console.log(this.mappedCategories);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  getBrands() {
    this.FiltersService.getProduct().subscribe({
      next: (result: any) => {
        console.log("brand",result);
        this.Data = result;
        this.mappedBrands = (this.Data as Product[])
          .filter((brand) => !brand.isDeleted)
          .map((brand) => {
            return {
              brand: brand.brand,
              isSelected: false,
            };
          });
        console.log(this.mappedBrands);
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
