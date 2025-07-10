import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    ProjectsRoutingModule,
    SharedModule,
    CommonModule,
    ButtonModule,
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsModule { }
