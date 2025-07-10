import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
  @Input() aosDelay: number = 0;
}
