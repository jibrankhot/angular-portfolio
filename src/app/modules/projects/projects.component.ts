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
      image: 'assets/projects/erp.png'
    },
    {
      title: 'School Fee Management System',
      description: 'Automated fee slab generation with student-wise exportable reports.',
      techStack: ['Angular', 'Bootstrap', 'Reactive Forms'],
      github: '',
      demo: '',
      image: 'assets/projects/school-fee.png'
    },
    {
      title: 'Portfolio Website',
      description: 'Animated Angular SPA portfolio deployed on GitHub Pages.',
      techStack: ['Angular', 'SCSS', 'AOS'],
      github: 'https://github.com/jibrankhot/angular-portfolio',
      demo: 'https://jibrankhot.github.io/angular-portfolio/',
      image: 'assets/projects/portfolio.png'
    }
  ];

}
