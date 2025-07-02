import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
<<<<<<< HEAD
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> 2ef88f065ed590af64af0c318d4992228e1a0084


@NgModule({
  declarations: [
<<<<<<< HEAD
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule
=======
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
>>>>>>> 2ef88f065ed590af64af0c318d4992228e1a0084
  ]
})
export class ContactModule { }
