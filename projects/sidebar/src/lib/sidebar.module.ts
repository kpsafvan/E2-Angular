import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [SidebarComponent],
  imports: [MatSidenavModule, MatIconModule, MatFormFieldModule, CommonModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
