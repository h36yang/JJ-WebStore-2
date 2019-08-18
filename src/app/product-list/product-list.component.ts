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

  featuredLoaded = false;
  hotLoaded = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // Featured - Category ID = 1
    const featuredCatgeoryId = 1;
    this.dataService.getProductsByCategory(featuredCatgeoryId)
      .subscribe(
        (data1: Product[]) => {
          this.featuredProducts = data1;
          this.featuredLoaded = true;
        }
      );

    // Hot - Category ID = 2
    const hotCategoryId = 2;
    this.dataService.getProductsByCategory(hotCategoryId)
      .subscribe(
        (data2: Product[]) => {
          this.hotProducts = data2;
          this.hotLoaded = true;
        }
      );
  }
}
