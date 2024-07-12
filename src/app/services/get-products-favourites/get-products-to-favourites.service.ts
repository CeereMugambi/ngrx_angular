import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { FavoriteProduct } from '../../models/favourite-product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductsToFavouritesService {

  constructor(private readonly storageService:StorageService<FavoriteProduct[]>) { }

  execute():FavoriteProduct[]{
    const products = <FavoriteProduct[]>this.storageService.get('favoritesProduct');

    return products;
  }
}

