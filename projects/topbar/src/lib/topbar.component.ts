import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-Topbar',
  template: `
    <style>
      .example-spacer {
        flex: 1 1 auto;
      }
      .container {
        margin-left: 0rem;
        background-color: red;
        /* width: 100% !important; */
        height: 7.5%;
      }
      .name {
        font-size: 2rem;
      }
      .user-details {
        display: flex;
        float: right;
      }
      .image { 
      }
      mat-toolbar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100% !important;
        /* height: 100% !important; */
        height: 7.5%;
      }
    </style>
    <div class="container">
      <mat-toolbar>
        <!-- <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button> -->
        <div class="logo-name">
          <mat-icon> shopping_cart </mat-icon>
          <span class="name">E2</span>
        </div>
        <span class="example-spacer"></span>
        <div class="user-details">
          <mat-icon> apps </mat-icon>
          <div class="image">
          </div>
        </div>
      </mat-toolbar>
    </div>
  `,
  styles: [],
})
export class TopbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
