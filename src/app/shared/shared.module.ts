import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    NgxTypedJsModule,
    ScrollTopComponent
  ]
})
export class SharedModule { }
