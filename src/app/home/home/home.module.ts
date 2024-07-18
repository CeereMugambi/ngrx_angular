import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeProductComponent } from './home-product/home-product.component';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FavouriteProductComponent } from './favourite-product/favourite-product.component';
import { HeaderFavouriteProductComponent } from './header-favouriteproduct/header-favourite-product/header-favourite-product.component';





@NgModule({
  declarations: [
    HomeProductComponent,
    FavouriteProductComponent,
    HeaderFavouriteProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  exports:[
    HomeProductComponent
  ]
})
export class HomeModule { }
