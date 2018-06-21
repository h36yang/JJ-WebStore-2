import { Injectable } from '@angular/core';

import { Product, ProductFunction } from './product-list/product';
import { FEATURED_PRODUCTS, HOT_PRODUCTS, PUERH_FUNCTIONS } from './product-list/product-data';
import { Contact } from './contact-us/contact';
import { CONTACTS } from './contact-us/contact-data';

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

  getPuErhFunctions(): ProductFunction[] {
    return PUERH_FUNCTIONS;
  }

  getContacts(): Contact[] {
    return CONTACTS;
  }
}
