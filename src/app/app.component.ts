// app.component.ts
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true, // only animate once
    });
  }
}
