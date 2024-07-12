import { TestBed } from '@angular/core/testing';

import { RecoveryProductsToFavouritesService } from './recovery-products-to-favourites.service';

describe('RecoveryProductsToFavouritesService', () => {
  let service: RecoveryProductsToFavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveryProductsToFavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
