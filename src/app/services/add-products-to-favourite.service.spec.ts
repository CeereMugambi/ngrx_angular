import { TestBed } from '@angular/core/testing';

import { AddProductsToFavouriteService } from './add-products-to-favourite.service';

describe('AddProductsToFavouriteService', () => {
  let service: AddProductsToFavouriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProductsToFavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
