import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Junior Angular Developer',
      company: 'Techmark Software Solution',
      period: '2022 – Present',
      description: 'Developed Angular modules for textile and school domain apps. Built dynamic forms, reusable components, and integrated RxJS patterns.'
    },
    {
      role: 'Software Support (VB.NET)',
      company: 'Techmark Software Solution',
      period: '2020 – 2022',
      description: 'Handled client-side debugging, wrote SQL procedures, resolved VB.NET issues. Promoted after proving coding skills and completing MSc IT.'
    }
  ];

}
