import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  typedStrings: string[] = [
    'Angular Developer',
    'UI Engineer',
    'RxJS Expert',
    'SCSS / Tailwind Enthusiast'
  ];
}
