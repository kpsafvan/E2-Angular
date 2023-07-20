export interface stock {
  stockId: number;
  quantity: number;
  locationId: number;
  isDeleted: boolean;
  createdBy: number;
  createdDate: Date;
  lastModifiedBy: number;
  lastModifiedDate: Date;
 // product?: ProductModel;
  //location?: LocationModel;
  productId?: number;
}
