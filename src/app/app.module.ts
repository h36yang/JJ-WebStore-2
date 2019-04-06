// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third Party Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ParallaxModule } from 'ngx-parallax';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

// Custom Modules
import { AppRoutingModule } from './app-routing.module';

// Custom Services
import { DataService } from './data.service';

// Custom Components
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { AboutPuErhComponent } from './about-pu-erh/about-pu-erh.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

/**
 * Easing Logic for easeInOutExpo easing
 * @param t current time
 * @param b beginning value
 * @param c change in value
 * @param d duration
 */
export function easeInOutExpo(t: number, b: number, c: number, d: number): number {
  if (t === 0) { return b; }
  if (t === d) { return b + c; }
  if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    AboutPuErhComponent,
    AboutUsComponent,
    ContactUsComponent,
    ContactCardComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent
  ],
  imports: [
    InViewportModule,
    ScrollSpyModule.forRoot(),
    AnimateOnScrollModule.forRoot(),
    NgxPageScrollCoreModule.forRoot({ scrollOffset: 80, easingLogic: easeInOutExpo }),
    NgxPageScrollModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ParallaxModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
