import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { FavoriteProduct } from '../../models/favourite-product.model';
import { AppState } from '../../states/favourite_product/app.state';
import { Store } from '@ngrx/store';
import { add } from '../../states/favourite_product/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class AddProductsToFavouriteService {
  constructor(private readonly storageService:StorageService<FavoriteProduct[]>,
    private readonly store:Store<AppState>) { }

  execute(product:FavoriteProduct){

    const favoritesProducts = <FavoriteProduct[]>this.storageService.get('favoritesProduct');
    
    if(favoritesProducts){
      favoritesProducts.push(product);
      this.storageService.add('favoritesProduct', favoritesProducts);
    }else {
      this.storageService.add('favoritesProduct', [product]);
    }

    this.store.dispatch(add({product}));
  }
}
