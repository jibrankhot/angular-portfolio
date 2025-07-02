import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true, // Animate only once
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to top on route change
        this.viewportScroller.scrollToPosition([0, 0]);

        // Refresh AOS to re-trigger animations correctly
        setTimeout(() => AOS.refresh(), 100);
      }
    });
  }

  ngAfterViewInit(): void {
    // Safety net refresh
    setTimeout(() => AOS.refresh(), 500);
  }
}
