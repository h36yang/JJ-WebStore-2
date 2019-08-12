import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../environments/environment';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  baseApi: string;
  imageApi: string;

  constructor() {
    this.baseApi = environment.baseApi;
  }

  ngOnInit() {
    this.imageApi = `${this.baseApi}Images/${this.product.avatarId}`;
  }
}
