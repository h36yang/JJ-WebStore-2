import { Component, OnInit } from '@angular/core';

import { ProductFunction } from '../product-list/product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about-pu-erh',
  templateUrl: './about-pu-erh.component.html',
  styleUrls: ['./about-pu-erh.component.css']
})
export class AboutPuErhComponent implements OnInit {

  puErhFunctions: ProductFunction[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.puErhFunctions = this.dataService.getPuErhFunctions();
  }
}
