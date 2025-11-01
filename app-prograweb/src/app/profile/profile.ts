import { Component } from '@angular/core';
import { Userservice } from '../services/userservice';
import { ProductService } from '../services/product';
import { Product } from '../models/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [NgFor],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  information:any;
  token:string='';
  profileData:any; 
  products:Array<Product>=[]; 
  constructor(private userService: Userservice,private productService: ProductService) {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.information = JSON.parse(user);
      this.token = this.information.token;
      
    }
    this.loadProfile();
    this.loadProducts();
  }
  loadProfile() {
    console.log('Loading profile for:', this.information.user.email);
    this.userService.getProfile(this.information.user.email, this.token).subscribe(
      profile => {
        this.profileData = profile;
        console.log('Profile data:', this.profileData);
      },
      error => {
        console.error('Failed to load profile:', error);
      }
    );
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