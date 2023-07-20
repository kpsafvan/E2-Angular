 
export interface product {
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
  categoryId: number ;
 // stock: StockModel[] | null;
}