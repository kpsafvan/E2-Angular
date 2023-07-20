import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SidebarComponent implements OnInit {
    private router;
    open: boolean;
    collapsible: boolean;
    dash: boolean;
    constructor(router: Router);
    ngOnInit(): void;
    dashboard(): void;
    category(): void;
    stocks(): void;
    products(): void;
    change(): void;
    opened(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "lib-Sidebar", never, {}, {}, never, ["*"], false>;
}
