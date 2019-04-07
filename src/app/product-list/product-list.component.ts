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
    // Featured - Category ID = 1
    this.dataService.getProductsByCategory(1)
      .subscribe(
        (data: Product[]) => this.featuredProducts = data
      );

    // Hot - Category ID = 2
    this.dataService.getProductsByCategory(2)
      .subscribe(
        (data: Product[]) => this.hotProducts = data
      );
  }
}
