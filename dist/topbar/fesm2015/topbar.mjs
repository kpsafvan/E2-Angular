import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';

class TopbarService {
    constructor() { }
}
TopbarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TopbarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TopbarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TopbarService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TopbarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class TopbarComponent {
    constructor() { }
    ngOnInit() { }
}
TopbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TopbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TopbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TopbarComponent, selector: "lib-Topbar", ngImport: i0, template: `
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
  `, isInline: true, styles: ["\n      .example-spacer {\n        flex: 1 1 auto;\n      }\n      .container {\n        margin-left: 0rem;\n        background-color: red;\n        /* width: 100% !important; */\n        height: 7.5%;\n      }\n      .name {\n        font-size: 2rem;\n      }\n      .user-details {\n        display: flex;\n        float: right;\n      }\n      .image { \n      }\n      mat-toolbar {\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 2;\n        width: 100% !important;\n        /* height: 100% !important; */\n        height: 7.5%;\n      }\n    "], dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TopbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-Topbar', template: `
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
  `, styles: ["\n      .example-spacer {\n        flex: 1 1 auto;\n      }\n      .container {\n        margin-left: 0rem;\n        background-color: red;\n        /* width: 100% !important; */\n        height: 7.5%;\n      }\n      .name {\n        font-size: 2rem;\n      }\n      .user-details {\n        display: flex;\n        float: right;\n      }\n      .image { \n      }\n      mat-toolbar {\n        position: fixed;\n        top: 0;\n        left: 0;\n        z-index: 2;\n        width: 100% !important;\n        /* height: 100% !important; */\n        height: 7.5%;\n      }\n    "] }]
        }], ctorParameters: function () { return []; } });

class TopbarModule {
}
TopbarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TopbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TopbarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: TopbarModule, declarations: [TopbarComponent], imports: [MatIconModule, MatToolbarModule], exports: [TopbarComponent] });
TopbarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TopbarModule, imports: [MatIconModule, MatToolbarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TopbarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TopbarComponent
                    ],
                    imports: [MatIconModule, MatToolbarModule
                    ],
                    exports: [
                        TopbarComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of topbar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TopbarComponent, TopbarModule, TopbarService };
//# sourceMappingURL=topbar.mjs.map
