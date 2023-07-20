import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../Models/Credentials';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://localhost:7134/api/';

  constructor(private http: HttpClient) {}
  Login(requestBody: Credentials): Observable<string> {
    const url = this.apiUrl + 'Registration/Login';
    console.log(url, requestBody);
    return this.http.post<string>(url, requestBody);
  }
}
