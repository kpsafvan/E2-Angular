import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

class SidebarService {
    constructor() { }
}
SidebarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SidebarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SidebarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SidebarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SidebarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SidebarComponent {
    constructor(router) {
        this.router = router;
        this.open = true;
        this.collapsible = true;
        this.dash = false;
    }
    ngOnInit() {
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
    products() {
        this.router.navigate(['products']);
    }
    change() {
        this.open = !this.open;
    }
    opened() {
        setTimeout(() => {
            this.change();
        }, 150);
        // this.open = !this.open;
    }
}
SidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SidebarComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
SidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: SidebarComponent, selector: "lib-Sidebar", ngImport: i0, template: `
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
  `, isInline: true, styles: ["\n      .sidenav-container {\n        height: 92.5%;\n      }\n      .sidenav {\n        padding-top: 1%;\n        border-color: white;\n        border-width: 5%;\n        width: 15%;\n        color: white;\n        background-color: #676767;\n        text-decoration-line: underline;\n        text-decoration: azure;\n        transition: width 0.3s ease-out;\n        transition: width 0s ease-in;\n      }\n      .sidenav-small {\n        padding-top: 1%;\n        border-color: white;\n        border-width: 20%;\n        background-color: #676767;\n        width: 2.5%;\n        transition: width 0.3s ease-out;\n        transition: width 0s ease-in;\n      }\n      .grid-container {\n        padding-top: 20%;\n        display: grid;\n        width: 100%;\n        grid-template-columns: auto;\n      }\n      .grid-item {\n        display: grid;\n        margin-top: 5%;\n        margin-bottom: 10%;\n        padding-bottom: 5%;\n        cursor: pointer;\n        font-size: 2rem;\n        border-bottom: 2px solid #ccc;\n        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n      }\n      .grid-container-sub {\n        display: grid;\n        width: 100%;\n        grid-template: auto;\n      }\n      .grid-item-sub {\n        padding-left: 2rem;\n        margin-top: 5%;\n        margin-bottom: 10%;\n        cursor: pointer;\n        font-size: 1.5rem;\n        border-bottom: 2px solid #ccc;\n        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n      }\n      .nav-list:hover() {\n        cursor: pointer;\n      }\n      .buttons {\n        color: white;\n        background-color: transparent;\n        border-color: transparent;\n        cursor: default;\n      }\n      mat-icon {\n        cursor: pointer;\n        vertical-align: middle;\n      }\n    "], dependencies: [{ kind: "component", type: i2.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i2.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i2.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-Sidebar', template: `
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
  `, styles: ["\n      .sidenav-container {\n        height: 92.5%;\n      }\n      .sidenav {\n        padding-top: 1%;\n        border-color: white;\n        border-width: 5%;\n        width: 15%;\n        color: white;\n        background-color: #676767;\n        text-decoration-line: underline;\n        text-decoration: azure;\n        transition: width 0.3s ease-out;\n        transition: width 0s ease-in;\n      }\n      .sidenav-small {\n        padding-top: 1%;\n        border-color: white;\n        border-width: 20%;\n        background-color: #676767;\n        width: 2.5%;\n        transition: width 0.3s ease-out;\n        transition: width 0s ease-in;\n      }\n      .grid-container {\n        padding-top: 20%;\n        display: grid;\n        width: 100%;\n        grid-template-columns: auto;\n      }\n      .grid-item {\n        display: grid;\n        margin-top: 5%;\n        margin-bottom: 10%;\n        padding-bottom: 5%;\n        cursor: pointer;\n        font-size: 2rem;\n        border-bottom: 2px solid #ccc;\n        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n      }\n      .grid-container-sub {\n        display: grid;\n        width: 100%;\n        grid-template: auto;\n      }\n      .grid-item-sub {\n        padding-left: 2rem;\n        margin-top: 5%;\n        margin-bottom: 10%;\n        cursor: pointer;\n        font-size: 1.5rem;\n        border-bottom: 2px solid #ccc;\n        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n      }\n      .nav-list:hover() {\n        cursor: pointer;\n      }\n      .buttons {\n        color: white;\n        background-color: transparent;\n        border-color: transparent;\n        cursor: default;\n      }\n      mat-icon {\n        cursor: pointer;\n        vertical-align: middle;\n      }\n    "] }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

class SidebarModule {
}
SidebarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SidebarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: SidebarModule, declarations: [SidebarComponent], imports: [MatSidenavModule, MatIconModule, MatFormFieldModule, CommonModule], exports: [SidebarComponent] });
SidebarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SidebarModule, imports: [MatSidenavModule, MatIconModule, MatFormFieldModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SidebarComponent],
                    imports: [MatSidenavModule, MatIconModule, MatFormFieldModule, CommonModule],
                    exports: [SidebarComponent],
                }]
        }] });

/*
 * Public API Surface of sidebar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SidebarComponent, SidebarModule, SidebarService };
//# sourceMappingURL=sidebar.mjs.map
