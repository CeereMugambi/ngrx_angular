import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeProductComponent } from './home-product/home-product.component';


@NgModule({
  declarations: [
    HomeProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    HomeProductComponent
  ]
})
export class HomeModule { }
