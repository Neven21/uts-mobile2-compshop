import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { ProductsService } from '../home/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  private products = new Array();
  constructor(private productService: ProductsService, private menuCtrl: MenuController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.products = this.productService.getAllProducts();
  }

  openMenu() {
    this.menuCtrl.toggle('menu');
  }

  deleteProduct(product) {
    this.presentLoading().then(() => {
      this.presentToast();
      this.productService.delete(product.id, product.tipe);
      this.products = this.productService.getAllProducts();
    });
  }

  async presentDeleteAlert(product) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Product',
      message: 'Are you sure want to delete ' + product.nama + ' ?',
      buttons : [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteProduct(product)
        }
      ]
    });
    await alert.present();
  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deleting product...',
      duration: 1000
    });
    await loading.present();

    const {role, data } = await loading.onDidDismiss();
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Product deleted successfully',
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

}
