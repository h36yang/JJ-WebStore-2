import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = '韵逸轩·中茶汇北美总代理';
  engTitle = 'China Tea';
  email = 'sales@zctea.ca';
  logoUrl = 'img/logo.png';
}
