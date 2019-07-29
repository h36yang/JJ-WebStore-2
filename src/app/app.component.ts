import { Component, OnInit } from '@angular/core';

import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      // Enable wowjs if motion is not reduced
      this.wowService.init();
    }
  }
}
