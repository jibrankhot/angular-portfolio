import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
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
