import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { Router } from '@angular/router';
import { delay } from 'rxjs';
@Component({
  selector: 'lib-Sidebar',
  template: `
    <style>
      .sidenav-container {
        height: 92.5%;
      }
      .sidenav {
        padding-top: 1%;
        border-color: white;
        border-width: 5%;
        width: 15%;
        color: white;
        background-color: #676767;
        text-decoration-line: underline;
        text-decoration: azure;
        transition: width 0.3s ease-out;
        transition: width 0s ease-in;
      }
      .sidenav-small {
        padding-top: 1%;
        border-color: white;
        border-width: 20%;
        background-color: #676767;
        width: 2.5%;
        transition: width 0.3s ease-out;
        transition: width 0s ease-in;
      }
      .grid-container {
        padding-top: 20%;
        display: grid;
        width: 100%;
        grid-template-columns: auto;
      }
      .grid-item {
        display: grid;
        margin-top: 5%;
        margin-bottom: 10%;
        padding-bottom: 5%;
        cursor: pointer;
        font-size: 2rem;
        border-bottom: 2px solid #ccc;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }
      .grid-container-sub {
        display: grid;
        width: 100%;
        grid-template: auto;
      }
      .grid-item-sub {
        padding-left: 2rem;
        margin-top: 5%;
        margin-bottom: 10%;
        cursor: pointer;
        font-size: 1.5rem;
        border-bottom: 2px solid #ccc;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }
      .nav-list:hover() {
        cursor: pointer;
      }
      .buttons {
        color: white;
        background-color: transparent;
        border-color: transparent;
        cursor: default;
      }
      mat-icon {
        cursor: pointer;
        vertical-align: middle;
      }
    </style>
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #sidenav
        mode="side"
        opened="true"
        class="sidenav"
        *ngIf="open"
      >
        <button
          mat-button
          (click)="opened(); sidenav.toggle()"
          class="buttons"
          style="float: right;"
        >
          <mat-icon style="transform: rotate(180deg)"> input </mat-icon>
          <!-- < 
          <img src="HamburgerIcon.png" alt="naeahi" />
          <img src="/HamburgerIcon.png" alt="naashi" />
          <img src="assets/HamburgerIcon.png" alt="naashi" />
          <img src="/assets/HamburgerIcon.png" alt="naashi" /> 
          <img src="/assets/HamburgerIcon.png" alt="naashi" /> -->
        </button>

        <div class="grid-container">
          <div class="grid-item">MAIN</div>
        </div>
        <div class="grid-container-sub">
          <div class="grid-item-sub">
            <a (click)="dashboard()"
              ><mat-icon> dashboard </mat-icon> Dashboard</a
            >
          </div>
          <div class="grid-item-sub">
            <a (click)="category()"><mat-icon> category </mat-icon> Category</a>
          </div>
          <div class="grid-item-sub">
            <a (click)="stocks()"> <mat-icon> store </mat-icon> Stocks</a>
          </div>
          <div class="grid-item-sub">
            <a (click)="products()">
              <mat-icon> shopping_basket </mat-icon> Products</a
            >
          </div>
        </div>
      </mat-sidenav>
      <mat-sidenav
        #sidenav
        mode="side"
        opened
        class="sidenav-small"
        *ngIf="!open"
      >
        <button
          class="buttons"
          (click)="opened(); sidenav.toggle()"
          style="width:100%"
        >
          <mat-icon> dehaze </mat-icon>
        </button>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [],
})
export class SidebarComponent implements OnInit {
  open = true;
  collapsible = true;
  dash = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.open = true;
  }
  dashboard() {
    this.router.navigate(['dashboard']);
    this.dash = true;
  }
  category() {
    this.router.navigate(['category']);
  }
  stocks() {
    this.router.navigate(['stocks']);
  }
  public products() {
    this.router.navigate(['products']);
  }
  public change() {
    this.open = !this.open;
  }
  opened() {
    setTimeout(() => {
      this.change();
    }, 150);
    // this.open = !this.open;
  }
}
