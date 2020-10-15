import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ProductsService } from 'src/app/home/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {
  private id;
  private product;
  private type;
  constructor(private route: ActivatedRoute, private productService: ProductsService, private loadingCtrl: LoadingController, private toastCtrl: ToastController , private Route: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param) {
        this.id = param.productId;
        this.type = param.productType;
      }
    });

    if (this.type == 'CPU') {
      this.product = this.productService.getCpu(this.id);
    } else if (this.type == 'GPU') {
      this.product = this.productService.getGpu(this.id);
    } else if (this.type == 'Motherboard') {
      this.product = this.productService.getMb(this.id);
    } else if (this.type == 'RAM') {
      this.product = this.productService.getRam(this.id);
    } else {
      this.product = null;
    }
  }

  editProduct(form: NgForm) {

    const id = this.id;
    const url = form.value.foto;
    const merek = form.value.merek;
    const model = form.value.model;
    const harga = form.value.harga;
    const stok = form.value. stok;
    let base = null;
    let boost = null;
    let core = null;
    let thread = null;
    let chipset = null;
    let processor = null;
    let speed = null;
    let ukuran = null;

    if (this.type=='CPU'){
      base = form.value.base;
      boost = form.value.boost;
      core = form.value.core;
      thread = form.value.thread;
    }
    else if (this.type=='Motherboard'){
      chipset = form.value.chipset;
      processor = form.value.processor;
    }
    else if (this.type=='RAM'){
      speed = form.value.speed;
      ukuran = form.value.ukuran;
    }

    this.presentLoading().then(() => {
          this.presentToast();
          if (this.type=='CPU') {
            this.productService.updateCpu(id, url, merek, model, harga, stok, base, boost, core, thread);
          } else if (this.type=='Motherboard') {
            this.productService.updateMb(id, url, merek, model, harga, stok, chipset, processor);
          } else if (this.type=='RAM') {
            this.productService.updateRam(id, url, merek, model, harga, stok, speed, ukuran);
          } else {
            this.productService.updateGpu(id, url, merek, model, harga, stok);
          }
          this.Route.navigate(['/admin']);
        });
  }

  async presentEditAlert(form) {
    const alert = await this.alertCtrl.create({
      header: 'Edit Product',
      message: 'Are you sure want to edit this product?' ,
      buttons : [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Edit',
          handler: () => this.editProduct(form)
        }
      ]
    });
    await alert.present();
  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Updating product...',
      duration: 1000
    });
    await loading.present();

    const {role, data } = await loading.onDidDismiss();
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Product updated successfully',
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }


}
