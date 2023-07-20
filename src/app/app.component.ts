import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  @Output() Shop_Admin = new EventEmitter();
  title = 'FrontEnd_E2';
  topbar=true;
  sidebar=true;
  shop=false;
  constructor(private router: Router) { }
  // category(){
  //   this.router.navigate(['category']);
  // }
  // stocks(){
  //   this.router.navigate(['stocks']);
  // }
  // products(){
  //   this.router.navigate(['products']);
  // }
  ngOnInit(){
    this.ShopAdmin();  
  }
  public ShopAdmin(){
    this.topbar=!this.topbar;
    this.sidebar=!this.sidebar;
    this.shop=!this.shop;
    this.Shop_Admin.emit();
    
  }
}
