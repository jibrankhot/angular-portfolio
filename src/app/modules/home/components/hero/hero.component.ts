import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  typedStrings: string[] = [
    'Angular Developer',
    'Frontend Engineer',
    'RxJS Enthusiast',
    'State Management Enthusiast',
    'UI/UX Focused Developer'
  ];
}
