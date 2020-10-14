import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private products = new Array();
  private layout;
  constructor(private productService: ProductsService, private menuCtrl: MenuController) {}

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.layout = 'list';
    this.products = this.productService.getAllProducts();
    this.products = this.products.filter(product => {
      return parseInt(product.stok) > 0;
    });
  }

  changeLayout(type) {
    this.layout = type;
  }

  openMenu() {
    this.menuCtrl.toggle('menu');
  }
}
