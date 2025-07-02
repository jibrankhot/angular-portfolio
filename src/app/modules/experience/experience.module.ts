import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';


@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceCardComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
