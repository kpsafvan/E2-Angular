import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/common";
export class SidebarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zaWRlYmFyL3NyYy9saWIvc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBZ0psRCxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSmxDLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQUcsS0FBSyxDQUFDO0lBRXdCLENBQUM7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNELE1BQU07UUFDSixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLDBCQUEwQjtJQUM1QixDQUFDOzs2R0EvQlUsZ0JBQWdCO2lHQUFoQixnQkFBZ0IsbURBeklqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzSVQ7MkZBR1UsZ0JBQWdCO2tCQTNJNUIsU0FBUzsrQkFDRSxhQUFhLFlBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0lUIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNpZGVuYXZNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItU2lkZWJhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN0eWxlPlxuICAgICAgLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA5Mi41JTtcbiAgICAgIH1cbiAgICAgIC5zaWRlbmF2IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDElO1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItd2lkdGg6IDUlO1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzY3Njc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogYXp1cmU7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDBzIGVhc2UtaW47XG4gICAgICB9XG4gICAgICAuc2lkZW5hdi1zbWFsbCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxJTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAyMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzY3Njc7XG4gICAgICAgIHdpZHRoOiAyLjUlO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwcyBlYXNlLWluO1xuICAgICAgfVxuICAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwJTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgICAgIH1cbiAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIC5ncmlkLWNvbnRhaW5lci1zdWIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0bztcbiAgICAgIH1cbiAgICAgIC5ncmlkLWl0ZW0tc3ViIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIC5uYXYtbGlzdDpob3ZlcigpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLmJ1dHRvbnMge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJzaWRlbmF2LWNvbnRhaW5lclwiPlxuICAgICAgPG1hdC1zaWRlbmF2XG4gICAgICAgICNzaWRlbmF2XG4gICAgICAgIG1vZGU9XCJzaWRlXCJcbiAgICAgICAgb3BlbmVkPVwidHJ1ZVwiXG4gICAgICAgIGNsYXNzPVwic2lkZW5hdlwiXG4gICAgICAgICpuZ0lmPVwib3BlblwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBtYXQtYnV0dG9uXG4gICAgICAgICAgKGNsaWNrKT1cIm9wZW5lZCgpOyBzaWRlbmF2LnRvZ2dsZSgpXCJcbiAgICAgICAgICBjbGFzcz1cImJ1dHRvbnNcIlxuICAgICAgICAgIHN0eWxlPVwiZmxvYXQ6IHJpZ2h0O1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWljb24gc3R5bGU9XCJ0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpXCI+IGlucHV0IDwvbWF0LWljb24+XG4gICAgICAgICAgPCEtLSA8IFxuICAgICAgICAgIDxpbWcgc3JjPVwiSGFtYnVyZ2VySWNvbi5wbmdcIiBhbHQ9XCJuYWVhaGlcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL0hhbWJ1cmdlckljb24ucG5nXCIgYWx0PVwibmFhc2hpXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9IYW1idXJnZXJJY29uLnBuZ1wiIGFsdD1cIm5hYXNoaVwiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL0hhbWJ1cmdlckljb24ucG5nXCIgYWx0PVwibmFhc2hpXCIgLz4gXG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL0hhbWJ1cmdlckljb24ucG5nXCIgYWx0PVwibmFhc2hpXCIgLz4gLS0+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj5NQUlOPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jb250YWluZXItc3ViXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbS1zdWJcIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJkYXNoYm9hcmQoKVwiXG4gICAgICAgICAgICAgID48bWF0LWljb24+IGRhc2hib2FyZCA8L21hdC1pY29uPiBEYXNoYm9hcmQ8L2FcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtLXN1YlwiPlxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cImNhdGVnb3J5KClcIj48bWF0LWljb24+IGNhdGVnb3J5IDwvbWF0LWljb24+IENhdGVnb3J5PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW0tc3ViXCI+XG4gICAgICAgICAgICA8YSAoY2xpY2spPVwic3RvY2tzKClcIj4gPG1hdC1pY29uPiBzdG9yZSA8L21hdC1pY29uPiBTdG9ja3M8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbS1zdWJcIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJwcm9kdWN0cygpXCI+XG4gICAgICAgICAgICAgIDxtYXQtaWNvbj4gc2hvcHBpbmdfYmFza2V0IDwvbWF0LWljb24+IFByb2R1Y3RzPC9hXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYXQtc2lkZW5hdj5cbiAgICAgIDxtYXQtc2lkZW5hdlxuICAgICAgICAjc2lkZW5hdlxuICAgICAgICBtb2RlPVwic2lkZVwiXG4gICAgICAgIG9wZW5lZFxuICAgICAgICBjbGFzcz1cInNpZGVuYXYtc21hbGxcIlxuICAgICAgICAqbmdJZj1cIiFvcGVuXCJcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiYnV0dG9uc1wiXG4gICAgICAgICAgKGNsaWNrKT1cIm9wZW5lZCgpOyBzaWRlbmF2LnRvZ2dsZSgpXCJcbiAgICAgICAgICBzdHlsZT1cIndpZHRoOjEwMCVcIlxuICAgICAgICA+XG4gICAgICAgICAgPG1hdC1pY29uPiBkZWhhemUgPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L21hdC1zaWRlbmF2PlxuICAgICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvbWF0LXNpZGVuYXYtY29udGVudD5cbiAgICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9wZW4gPSB0cnVlO1xuICBjb2xsYXBzaWJsZSA9IHRydWU7XG4gIGRhc2ggPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IHRydWU7XG4gIH1cbiAgZGFzaGJvYXJkKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkJ10pO1xuICAgIHRoaXMuZGFzaCA9IHRydWU7XG4gIH1cbiAgY2F0ZWdvcnkoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydjYXRlZ29yeSddKTtcbiAgfVxuICBzdG9ja3MoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydzdG9ja3MnXSk7XG4gIH1cbiAgcHVibGljIHByb2R1Y3RzKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncHJvZHVjdHMnXSk7XG4gIH1cbiAgcHVibGljIGNoYW5nZSgpIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICB9XG4gIG9wZW5lZCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlKCk7XG4gICAgfSwgMTUwKTtcbiAgICAvLyB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICB9XG59XG4iXX0=