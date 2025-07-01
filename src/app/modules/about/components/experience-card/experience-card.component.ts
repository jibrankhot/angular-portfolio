import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  experienceList = [
    {
      company: 'Techmark Software Solutions',
      duration: '2020 – Present',
      title: 'Angular Developer',
      description: 'Built reusable components, integrated APIs, and contributed to Angular apps for textile and school domains.'
    },
    {
      company: 'Techmark Software Solutions',
      duration: '2019 – 2020',
      title: 'Support Developer (VB.NET)',
      description: 'Resolved live production issues, handled client queries, and maintained SQL + VB systems while pursuing MSc IT.'
    }
  ];
  education = [
    {
      degree: 'MSc IT',
      institution: 'Mumbai University',
      year: '2022',
    },
    {
      degree: 'BSc IT',
      institution: 'Mumbai University',
      year: '2020',
    }
  ];
}
