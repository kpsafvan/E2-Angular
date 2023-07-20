export interface Category {
  categoryId: string;
  name: string;
  parent: string; //Doubt in Validation
  isDeleted: boolean;
  product: string;
  CreatedBy: string;
  CreatedDate: string;
  LastModifiedBy: string;
  LastModifiedDate: string;
}
export interface CategoryFilter {
  category: string;
  isSelected: boolean;
  categoryId: string;
}
export interface BrandFilter {
  brand: string;
  isSelected: boolean;
}

export interface Product {
  productId: number;
  price: number;
  name: string;
  brand: string;
  made: string;
  description: string;
  manDate: Date | null;
  expDate: Date | null;
  isDeleted: boolean;
  createdBy: number;
  createdDate: Date;
  lastModifiedBy: number;
  lastModifiedDate: Date;
  // category:category;
  categoryId: number;
  // stock: StockModel[] | null;
}
