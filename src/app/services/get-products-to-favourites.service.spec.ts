import { TestBed } from '@angular/core/testing';

import { GetProductsToFavouritesService } from './get-products-to-favourites.service';

describe('GetProductsToFavouritesService', () => {
  let service: GetProductsToFavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductsToFavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
