import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ProductsService } from '../home/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  private products = new Array();
  constructor(private productService: ProductsService, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.products = this.productService.getAllProducts();
  }

  openMenu() {
    this.menuCtrl.toggle('menu');
  }

}
