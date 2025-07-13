import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  images: string[];
  privateRepo?: boolean;
  disclaimer?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Textile ERP Dashboard',
      description: 'An internal ERP module for textile operations, managing inventory, HR, and reporting with role-based controls.',
      disclaimer: '🔒 This is a proprietary project and cannot be publicly shared.',
      techStack: ['Angular', 'RxJS', 'PrimeNG'],
      github: '',
      demo: '',
      privateRepo: true,
      images: [
        'assets/images/Common-Master.webp',
        'assets/images/employee-master-page.webp',
        'assets/images/exam-master.webp'
      ]
    },
    {
      title: 'School Fee Management System',
      description: 'A system for managing student fee slabs, automating calculations, and exporting detailed reports.',
      disclaimer: '🔒 This project is used in a closed school system and remains private.',
      techStack: ['Angular', 'Bootstrap', 'Reactive Forms'],
      github: '',
      demo: '',
      privateRepo: true,
      images: [
        'assets/images/Fees-master.webp',
        'assets/images/payroll-master.webp',
        'assets/images/preview.webp'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'My personal Angular portfolio SPA showcasing my projects with animations, modals, and image previews.',
      disclaimer: '',
      techStack: ['Angular', 'SCSS', 'AOS', 'PrimeNG'],
      github: 'https://github.com/jibrankhot/angular-portfolio',
      demo: 'https://jibrankhot.github.io/angular-portfolio/',
      privateRepo: false,
      images: [
        'assets/images/preview.png',
        'assets/images/profile.webp'
      ]
    }
  ];
}
