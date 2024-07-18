import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FavoriteProduct } from '../../../models/favourite-product.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../states/favourite_product/app.state';
import { selectProducts } from '../../../states/favourite_product/selector/app.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title!: string;
  favoritesProducts:Observable<Array<FavoriteProduct>> = this.store.pipe(select(selectProducts))

  constructor(private router: Router,  private store:Store<AppState>) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setTitleFromRoute(this.router.routerState.snapshot.root);
      }
    });
  }

  setTitleFromRoute(route: ActivatedRouteSnapshot) {
    if (route.firstChild) {
      this.setTitleFromRoute(route.firstChild);
    } else {
      this.title = route.data['title'];
    }
  }
  
  redirectToHomeFavoritesProductsPage(){
    this.router.navigate(['/favorites']);
  }

  redirectToHome(){
    this.router.navigate(['/']);
  }
}
