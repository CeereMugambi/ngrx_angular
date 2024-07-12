import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { FavoriteProduct } from '../../models/favourite-product.model';
import { AppState } from '../../states/favourite_product/app.state';
import { Store } from '@ngrx/store';
import { remove } from '../../states/favourite_product/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class RemoveProductsFromFavouritesService {

  constructor(private readonly storageService:StorageService<FavoriteProduct[]>,
    private readonly store:Store<AppState>) { }

  execute(product:FavoriteProduct):boolean{
    const favoritesProducts = <FavoriteProduct[]>this.storageService.get('favoritesProduct');

    if(favoritesProducts){
      const newfavoritesProducts = favoritesProducts.filter((p) => p.id !== product.id);
      this.storageService.add('favoritesProduct', newfavoritesProducts);
      this.store.dispatch(remove({product}));
      return true;
    }

    return false;
  }
}

