import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private appComponent: AppComponent) { }

  ngOnInit(): void {
  }
  product(){
    this.router.navigate(['products']);
  }
  stock(){
    this.router.navigate(['stocks']);
  }
  category(){
    this.router.navigate(['category']);
  }
  home(){
    this.router.navigate(['login']);
  }
  shop(){
    this.appComponent.ShopAdmin();
    this.router.navigate(['shop']);
  }
}
