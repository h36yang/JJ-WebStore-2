import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  featuredProducts: Product[];
  hotProducts: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.featuredProducts = this.dataService.getFeaturedProducts();
    this.hotProducts = this.dataService.getHotProducts();
  }
}
