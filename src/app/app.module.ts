// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

// Third Party Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ParallaxModule } from 'ngx-parallax';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';
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

// Provide window object for browser and a suitable replacement on other platforms
export const getWindow = () => window;
export const inViewportProviders: Provider[] = [{
  provide: WindowRef,
  useFactory: (getWindow)
}];

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
    InViewportModule.forRoot(inViewportProviders),
    ScrollSpyModule.forRoot(),
    NgbModule.forRoot(),
    AnimateOnScrollModule.forRoot(),
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
