import { Component, OnInit,HostListener } from '@angular/core';
import { RemoveProductsFromFavouritesService } from '../../../services/remove-products-favourites/remove-products-from-favourites.service';
import { GetProductsToFavouritesService } from '../../../services/get-products-favourites/get-products-to-favourites.service';
import { ClearProductsFromFavouritesService } from '../../../services/clear-products/clear-products-from-favourites.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GridList } from '../../../commons/grid-list.class';
import { FavoriteProduct } from '../../../models/favourite-product.model';

@Component({
  selector: 'app-favourite-product',
  templateUrl: './favourite-product.component.html',
  styleUrl: './favourite-product.component.css'
})
export class FavouriteProductComponent  extends GridList<FavoriteProduct> implements OnInit{
  override rowHeight: string = '320px';

  constructor(
    private readonly removeProductToFavoritesService:RemoveProductsFromFavouritesService,
    private readonly getProductToFavoritesService:GetProductsToFavouritesService,
    private readonly clearProductToFavoritesService:ClearProductsFromFavouritesService,
    breakpointObserver:BreakpointObserver, 
  )
  {
    super(breakpointObserver);
  }

  @HostListener("window:resize", ["$event"])
  onResize(__:any){
    this.colsDesktop = this.getNumberOfColumns();
  }
  
  ngOnInit(){
    this.initFavoritesProducts();
  }

  removeProductFavorites(product:FavoriteProduct){
    this.removeProductToFavoritesService.execute(product);
    this.initFavoritesProducts();
  }

  clearFavoriteList(){
    this.clearProductToFavoritesService.execute()
    this.initFavoritesProducts();
  }

  private initFavoritesProducts(){
    this.data = this.getProductToFavoritesService.execute()
  }

}
