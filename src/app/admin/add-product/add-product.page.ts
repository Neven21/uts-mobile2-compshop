import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductsService } from 'src/app/home/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  private type;
  constructor(private Route: Router, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private productService: ProductsService) { }

  ngOnInit() {
    this.type = null;
  }
  
  onTypeChange($event){
    this.type = $event.detail.value;
  }

  onSubmit(form: NgForm) {

    const url = form.value.url;
    const tipe = form.value.tipe;
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

    if (tipe=='CPU'){
      base = form.value.base;
      boost = form.value.boost;
      core = form.value.core;
      thread = form.value.thread;
    }
    else if (tipe=='MB'){
      chipset = form.value.chipset;
      processor = form.value.processor;
    }
    else if (tipe=='RAM'){
      speed = form.value.speed;
      ukuran = form.value.ukuran;
    }

    this.presentLoading().then(() => {
          this.presentToast();
          if (tipe=='CPU') {
            this.productService.addCpu(url, tipe, merek, model, harga, stok, base, boost, core, thread);
          } else if (tipe=='MB') {
            this.productService.addMb(url, tipe, merek, model, harga, stok, chipset, processor);
          } else if (tipe=='RAM') {
            this.productService.addRam(url, tipe, merek, model, harga, stok, speed, ukuran);
          } else {
            this.productService.addGpu(url, tipe, merek, model, harga, stok);
          }
          this.Route.navigate(['/admin']);
        });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding product...',
      duration: 1000
    });
    await loading.present();

    const {role, data } = await loading.onDidDismiss();
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Product added successfully',
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

}
