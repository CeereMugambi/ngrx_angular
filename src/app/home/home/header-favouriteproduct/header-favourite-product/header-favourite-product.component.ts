import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header-favourite-product',
  templateUrl: './header-favourite-product.component.html',
  styleUrl: './header-favourite-product.component.css'
})
export class HeaderFavouriteProductComponent {
  @Output()
  clickClearEvent:EventEmitter<any> = new EventEmitter<any>();


  clearEvent() {
    this.clickClearEvent.emit()
  }
}

