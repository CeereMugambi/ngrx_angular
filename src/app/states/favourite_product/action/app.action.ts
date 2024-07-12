import { createAction, props } from '@ngrx/store';
import { FavoriteProduct } from '../../../models/favourite-product.model';

//take description as first param and data to be processed as second param
//four actions add,remove,update and clear
export const add = createAction('[FavoriteProduct] Add',  props<{ product: FavoriteProduct }>());
export const remove = createAction('[FavoriteProduct] Remove', props<{ product: FavoriteProduct }>());
export const updateAllState = createAction('[FavoriteProduct] Update all state of favorites products', 
 props<{ products: FavoriteProduct[] }>());
export const clear = createAction('[FavoriteProduct] Clear')