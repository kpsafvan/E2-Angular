import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar.component';

import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [ MatIconModule,MatToolbarModule 
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
