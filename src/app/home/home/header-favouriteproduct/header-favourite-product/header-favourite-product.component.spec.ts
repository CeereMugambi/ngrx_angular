import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFavouriteProductComponent } from './header-favourite-product.component';

describe('HeaderFavouriteProductComponent', () => {
  let component: HeaderFavouriteProductComponent;
  let fixture: ComponentFixture<HeaderFavouriteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderFavouriteProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFavouriteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
