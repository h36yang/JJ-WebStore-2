import { Component, OnInit } from '@angular/core';

import { faArrowCircleDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ParallaxConfig } from 'ngx-parallax';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  customStyle: object;
  faArrowCircleDown: IconDefinition;
  parallaxConfig: ParallaxConfig;

  ngOnInit() {
    this.parallaxConfig = { ratio: 0.2 };
    this.faArrowCircleDown = faArrowCircleDown;
    // Initalize background image height to be window height
    this.customStyle = {
      height: window.innerHeight + 'px'
    };
  }

  adjustHeight() {
    // Only adjust background image height dynamically when viewport is smaller than 1024px
    if (window.innerWidth > 1024) {
      this.customStyle = {
        height: window.innerHeight + 'px'
      };
    }
  }
}
