import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Textile ERP Dashboard',
      description: 'Multi-role dashboard with inventory, user management, and dynamic reports.',
      techStack: ['Angular', 'RxJS', 'PrimeNG'],
      github: '',
      demo: '',
      images: [
        'assets/images/Common-Master.webp',
        'assets/images/employee-master-page.webp',
        'assets/images/exam-master.webp'
      ]
    },
    {
      title: 'School Fee Management System',
      description: 'Automated fee slab generation with student-wise exportable reports.',
      techStack: ['Angular', 'Bootstrap', 'Reactive Forms'],
      github: '',
      demo: '',
      images: [
        'assets/images/Fees-master.webp',
        'assets/images/payroll-master.webp',
        'assets/images/preview.webp'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Animated Angular SPA portfolio deployed on GitHub Pages.',
      techStack: ['Angular', 'SCSS', 'AOS'],
      github: 'https://github.com/jibrankhot/angular-portfolio',
      demo: 'https://jibrankhot.github.io/angular-portfolio/',
      images: [
        'assets/images/preview.png',
        'assets/images/profile.webp'
      ]
    }
  ];
}
