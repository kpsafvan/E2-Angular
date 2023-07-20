import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Services/LoginService.Service';
import { Credentials, Session } from './Models/Credentials';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  result: Session = { name: '', userId: 0, isActive: false };
  credentials: Credentials = { username: '', password: '' };
  constructor(private router: Router, private LoginService: LoginService) {}

  ngOnInit(): void {}
  // Login(){
  //   console.log(this.username,'   ',this.password);
  //   this.router.navigate(['category']);
  // }

  Login() {
    this.credentials = { username: this.username, password: this.password };
    console.log(this.credentials);
    this.LoginService.Login(this.credentials).subscribe({
      next: (result: any) => {
        this.router.navigate(['dashboard']);
        console.log(result);
        this.result = result;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  /*
  myObservableHere.subscribe({
    next: (result: any) => {
    console.log(result);
    },
    error: (err: any) => {
    console.log(err);
    },
    complete: () => {
    console.log('complete');

    (
      (response) => {
        // Handle the successful response
        console.log(response);
      },
      (error) => {
        // Handle the error
        console.log('here');
        console.error(error);
      }
    );

    */
}
