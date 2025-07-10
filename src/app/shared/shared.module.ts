import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';



@NgModule({
  declarations: [
    NavbarComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    NgxTypedJsModule,
    RouterModule,
    GalleriaModule
  ],
  exports: [
    NavbarComponent,
    NgxTypedJsModule,
    ScrollTopComponent,
    GalleriaModule
  ]
})
export class SharedModule { }
