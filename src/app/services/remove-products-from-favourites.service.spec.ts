import { TestBed } from '@angular/core/testing';

import { RemoveProductsFromFavouritesService } from './remove-products-from-favourites.service';

describe('RemoveProductsFromFavouritesService', () => {
  let service: RemoveProductsFromFavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveProductsFromFavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
