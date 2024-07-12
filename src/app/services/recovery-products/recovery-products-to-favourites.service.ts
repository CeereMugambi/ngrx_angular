import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { FavoriteProduct } from '../../models/favourite-product.model';
import { AppState } from '../../states/favourite_product/app.state';
import { Store } from '@ngrx/store';
import { updateAllState } from '../../states/favourite_product/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class RecoveryProductsToFavouritesService {

  constructor(private readonly storageService:StorageService<FavoriteProduct[]>,
    private readonly store:Store<AppState>) { }

  execute():void{
    const products = <FavoriteProduct[]>this.storageService.get('favoritesProduct');
  
    if(products){
      this.store.dispatch(updateAllState({products}));
    }
  }
}