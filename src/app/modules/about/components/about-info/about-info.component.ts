import { Component } from '@angular/core';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss']
})
export class AboutInfoComponent {
  typedStrings: string[] = [
    'Angular Developer',
    'RxJS Enthusiast',
    'UI Specialist',
    'Clean Code Advocate'
  ];
}
