import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ NgFor ],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  products:Array<Product>=[]; 
  token:string='';

  constructor(private productService: ProductService) {
    this.loadProducts();
  }
loadProducts() {
    this.productService.getall(this.token).subscribe(
      products => {
        this.products = products;
        console.log('Products loaded:', this.products);
      },
      error => {
        console.error('Failed to load products:', error);
      }
    );
  }
}
