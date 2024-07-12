import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product.model';
import products from '../../../mock/products';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor() { }

  execute(): Observable<Array<Product>> {
    return of(products)
  }
}

