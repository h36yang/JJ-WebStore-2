import { Injectable } from '@angular/core';

import { Product } from './product-list/product';
import { FEATURED_PRODUCTS, HOT_PRODUCTS } from './product-list/product-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getFeaturedProducts(): Product[] {
    return FEATURED_PRODUCTS;
  }

  getHotProducts(): Product[] {
    return HOT_PRODUCTS;
  }
}
