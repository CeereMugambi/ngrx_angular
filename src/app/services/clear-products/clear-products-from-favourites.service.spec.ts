import { TestBed } from '@angular/core/testing';

import { ClearProductsFromFavouritesService } from './clear-products-from-favourites.service';

describe('ClearProductsFromFavouritesService', () => {
  let service: ClearProductsFromFavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClearProductsFromFavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
