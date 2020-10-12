import { Injectable } from '@angular/core';
import { Cpu } from './Models/cpu.model';
import { Gpu } from './Models/gpu.model';
import { Motherboard } from './Models/motherboard.model';
import { Ram } from './Models/ram.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private cpu: Cpu[] = [
    {
      id: 'c1',
      tipe: 'CPU',
      foto: 'https://www.intel.com/content/dam/products/hero/foreground/processor-box-core-i9-extreme-edition-1x1.png.rendition.intel.web.225.225.png',
      merek: 'Intel',
      model: 'Core i9-10980XE',
      base: '3.00',
      boost: '4.60',
      core: '18',
      thread: '36',
      harga: '10000000',
      stok: '50'
    }
  ]

  private gpu: Gpu[] = [
    {
      id: 'g1',
      tipe: 'GPU',
      foto: 'https://specials-images.forbesimg.com/imageserve/5f7ca28d6b179d3ea9be6f5c/960x0.jpg?fit=scale',
      merek: 'Nvidia',
      model: 'GeForce RTX 3080',
      harga: '9000000',
      stok: '50'
    }
  ]

  private motherboard: Motherboard[] = [
    {
      id: 'm1',
      tipe: 'Motherboard',
      foto: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=http://inishop.com/img/gallery/61153505_0697163229.jpg&height=550&width=550',
      merek: 'Intel',
      model: 'Asrock Q370M vPro',
      chipset: 'Intel Q370',
      prosesor: 'LGA 1151',
      harga: '3000000',
      stok: '50'
    }
  ]

  private ram: Ram[] = [
    {
      id: 'r1',
      tipe: 'RAM',
      foto: 'https://cdn.mos.cms.futurecdn.net/KYemrsbFjNsU7WTQP2iwrC-970-80.jpg.webp',
      merek: 'Team Group',
      model: 'Xtreem ARGB 3600 C14',
      speed: '3600',
      ukuran: '16',
      harga: '2500000',
      stok: '50'
    }
  ]

  constructor() { }

  getAllProducts(){
    const products = new Array();

    this.cpu.forEach(function (value) {
      products.push({
        id: value.id,
        foto: value.foto,
        nama: value.merek + ' ' + value.model,
        harga: value.harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        stok: value.stok,
      }) 
    });

    this.gpu.forEach(function (value) {
      products.push({
        id: value.id,
        foto: value.foto,
        nama: value.merek + ' ' + value.model,
        harga: value.harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        stok: value.stok,
      }) 
    });

    this.motherboard.forEach(function (value) {
      products.push({
        id: value.id,
        foto: value.foto,
        nama: value.merek + ' ' + value.model,
        harga: value.harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        stok: value.stok,
      }) 
    });

    this.ram.forEach(function (value) {
      products.push({
        id: value.id,
        foto: value.foto,
        nama: value.merek + ' ' + value.model,
        harga: value.harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        stok: value.stok,
      }) 
    });

    return [...products];
  }
}
