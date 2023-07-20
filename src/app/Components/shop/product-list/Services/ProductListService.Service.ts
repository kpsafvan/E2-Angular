import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private apiUrl = 'https://localhost:7134/api/';

  constructor(private http: HttpClient) { }

  // getData(id:number): Observable<any> {
  //   return this.http.get<any>(this.apiUrl + 'Customer/'+ id);
  // }
  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'Customer/Show');
  }
  getProduct(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'Product/Image');
  }
}