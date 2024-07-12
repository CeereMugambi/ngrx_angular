import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FavoriteProduct } from '../../../models/favourite-product.model';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css'
})
export class HomeProductComponent {
  constructor(private readonly storageService:StorageService<FavoriteProduct[]>){}

  addProductToFavorites(product:FavoriteProduct){
     const favoriteProduct:FavoriteProduct = {
       ...product,
       isFavorite: true
     }
     this.store.dispatch(add({product}));
   }
 
 }
}
