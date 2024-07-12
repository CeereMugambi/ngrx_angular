import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { AppState } from '../../states/favourite_product/app.state';
import { Store } from '@ngrx/store';
import { clear } from '../../states/favourite_product/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class ClearProductsFromFavouritesService {

  constructor(private readonly storageService:StorageService<void>,
    private readonly store:Store<AppState>) { }

  execute(){
    this.storageService.remove('favoritesProduct');
    this.store.dispatch(clear());
  }
}

