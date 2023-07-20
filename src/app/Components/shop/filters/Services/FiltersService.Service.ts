import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private apiUrl = 'https://localhost:7134/api/';

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'Category/Show');
  }
  getProduct(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'Product/Show');
  }
  
}