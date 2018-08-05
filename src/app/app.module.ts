import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ParallaxModule } from 'ngx-parallax';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutPuErhComponent } from './about-pu-erh/about-pu-erh.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductListComponent } from './product-list/product-list.component';

// Provide window object for browser and a suitable replacement on other platforms
export const getWindow = () => window;
export const inViewportProviders: Provider[] = [{
  provide: WindowRef,
  useFactory: (getWindow)
}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutPuErhComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductListComponent
  ],
  imports: [
    InViewportModule.forRoot(inViewportProviders),
    ScrollSpyModule.forRoot(),
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPageScrollModule,
    ParallaxModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
