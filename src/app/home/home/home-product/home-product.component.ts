import { Component,OnInit,HostListener } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { FavoriteProduct } from '../../../models/favourite-product.model';
import { Observable ,map} from 'rxjs';
import { GridList } from '../../../commons/grid-list.class';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../../states/favourite_product/app.state';
import { AddProductsToFavouriteService } from '../../../services/add-products/add-products-to-favourite.service';
import { RemoveProductsFromFavouritesService } from '../../../services/remove-products-favourites/remove-products-from-favourites.service';
import { RecoveryProductsToFavouritesService } from '../../../services/recovery-products/recovery-products-to-favourites.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Product } from '../../../models/product.model';
import { selectProducts } from '../../../states/favourite_product/selector/app.selector';


@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.css'
})
export class HomeProductComponent extends GridList<Product>  implements OnInit {
  override rowHeight: string = '320px';
  favoriteProductsObs:Observable<Array<FavoriteProduct>> = this.store.pipe(select(selectProducts));

  
  constructor(private readonly activatedRoute: ActivatedRoute, 
    private readonly store:Store<AppState>,
    private readonly addProductToFavoritesService:AddProductsToFavouriteService,
    private readonly removeProductToFavoritesService:RemoveProductsFromFavouritesService,
    private readonly recoveryProductToFavoritesService:RecoveryProductsToFavouritesService,
    breakpointObserver: BreakpointObserver
  )
  {
    super(breakpointObserver);
  }
  
  @HostListener("window:resize", ["$event"])
  onResize(__:any){
    this.colsDesktop = this.getNumberOfColumns();
  }

  ngOnInit(){
    this.initResolvers();
    this.updateStorageToStateFavoriteProducts();
  }

  addProductToFavorites(product:Product){
    const favoriteProduct:FavoriteProduct = {
      ...product,
      isFavorite: true
    }
    this.addProductToFavoritesService.execute(favoriteProduct);
  }

  removeProductToFavorites(product:Product){
    const favoriteProduct:FavoriteProduct = {
      ...product,
      isFavorite: false
    }
    this.removeProductToFavoritesService.execute(favoriteProduct);
  }

  private initResolvers(){
    this.activatedRoute.data.subscribe(({products}) => {
      this.initStateFavoriteProduct(products);
    })
  }

  private updateStorageToStateFavoriteProducts(){
    this.recoveryProductToFavoritesService.execute();
  }

  private initStateFavoriteProduct(products:Product[]){
    this.favoriteProductsObs.pipe(
      map((favoriteProducts) => this.mapProducts(products, favoriteProducts))
    )
    .subscribe((favotireProducts) => {
        this.data = favotireProducts;
    })
  }

  private mapProducts(products:Product[], favotireProducts:FavoriteProduct[]):FavoriteProduct[] {
    return products.map((product) => {
      const favoriteFound = favotireProducts.find((f) => f.id === product.id);
      return favoriteFound?{...product, isFavorite:true}:{...product, isFavorite:false}
    })
  }

}