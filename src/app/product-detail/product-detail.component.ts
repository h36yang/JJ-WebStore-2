import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faArrowLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { environment } from '../../environments/environment';
import { DataService } from '../data.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  baseApi: string;
  selectedId: number;
  product: Product;
  imageIds: number[] = [];
  faArrowLeft: IconDefinition;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) {
    this.baseApi = environment.baseApi;
  }

  ngOnInit() {
    this.faArrowLeft = faArrowLeft;
    this.selectedId = +this.route.snapshot.paramMap.get('id');
    this.dataService.getProductById(this.selectedId).subscribe(
      (data: Product) => {
        this.product = data;
        this.imageIds = this.mergeArrays(
          this.imageIds,
          this.product.avatarId,
          this.product.productImages.map(x => x.id)
        );
      }
    );
  }

  private mergeArrays(...arrays: any[]) {
    let jointArray = [];
    arrays.forEach(array => {
      jointArray = jointArray.concat(array);
    });
    const uniqueSet = new Set([...jointArray]);
    return Array.from(uniqueSet);
  }
}
