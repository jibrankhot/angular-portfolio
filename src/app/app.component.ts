import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Home | Jibran Khot - Angular Developer');
    this.meta.updateTag({
      name: 'description',
      content: 'Welcome to the portfolio of Jibran Khot — Angular Developer. Explore projects, skills, and contact info.'
    });

    // Optional: OpenGraph tags for link previews
    this.meta.updateTag({ property: 'og:title', content: 'Jibran Khot | Angular Developer Portfolio' });
    this.meta.updateTag({ property: 'og:description', content: 'Browse Angular projects, skills and contact Jibran Khot.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://your-site.com/assets/preview.jpg' }); // replace this with a real image later
    this.meta.updateTag({ property: 'og:url', content: 'https://jibrankhot.github.io/angular-portfolio/' });

    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => AOS.refresh(), 100);
      }
    });
  }

  ngAfterViewInit(): void {
    // Additional AOS refresh for safety
    setTimeout(() => AOS.refresh(), 500);
  }
}
