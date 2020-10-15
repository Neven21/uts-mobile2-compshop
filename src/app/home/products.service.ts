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
    },
    {
      id: 'c2',
      tipe: 'CPU',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/61CDr%2BCHWNL._AC_SL1500_.jpg',
      merek: 'AMD',
      model: 'Ryzen Threadripper 3970X',
      base: '3.70',
      boost: '4.50',
      core: '32',
      thread: '64',
      harga: '7000000',
      stok: '50'
    },
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
    },
    {
      id: 'g2',
      tipe: 'GPU',
      foto: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-rtx-turing/2080/gallery/geforce-rtx-2080-gallery-c-641-u.jpg',
      merek: 'Nvidia',
      model: 'GeForce RTX 2080',
      harga: '7000000',
      stok: '50'
    },
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
    },
    {
      id: 'm2',
      tipe: 'Motherboard',
      foto: 'https://pim-media.intel.com/pub-api/v1/imageservice/customize?url=http://images.icecat.biz/img/gallery/75776965_1233461881.jpg&height=550&width=550',
      merek: 'Intel',
      model: 'Gigabyte X299X Aorus Master',
      chipset: 'Intel X299',
      prosesor: 'LGA 2066',
      harga: '6000000',
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
    },
    {
      id: 'r2',
      tipe: 'RAM',
      foto: 'https://cdn.mos.cms.futurecdn.net/SWkrDZbyjj7EsW8mBLhpHT-970-80.jpg.webp',
      merek: 'Corsair',
      model: 'Vengeance LED',
      speed: '3200',
      ukuran: '16',
      harga: '2000000',
      stok: '50'
    },
  ]

  constructor() { }

  getAllProducts(){
    const products = new Array();

    this.cpu.forEach(function (value) {
      products.push({
        id: value.id,
        tipe: value.tipe,
        foto: value.foto,
        nama: value.merek + ' ' + value.model,
        harga: value.harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        stok: value.stok,
      }) 
    });

    this.gpu.forEach(function (value) {
      products.push({
        id: value.id,
        tipe: value.tipe,
        foto: value.foto,
        nama: value.merek + ' ' + value.model,
        harga: value.harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        stok: value.stok,
      }) 
    });

    this.motherboard.forEach(function (value) {
      products.push({
        id: value.id,
        tipe: value.tipe,
        foto: value.foto,
        nama: value.merek + ' ' + value.model,
        harga: value.harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        stok: value.stok,
      }) 
    });

    this.ram.forEach(function (value) {
      products.push({
        id: value.id,
        tipe: value.tipe,
        foto: value.foto,
        nama: value.merek + ' ' + value.model,
        harga: value.harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
        stok: value.stok,
      }) 
    });

    return [...products];
  }

  getCpu(id){
    return this.cpu.filter(cpu => {
      return cpu.id == id;
    });
  }
  
  getGpu(id){
    return this.gpu.filter(gpu => {
      return gpu.id == id;
    });
  }

  getMb(id){
    return this.motherboard.filter(mb => {
      return mb.id == id;
    });
  }

  getRam(id){
    return this.ram.filter(ram => {
      return ram.id == id;
    });
  }

  addCpu(url, tipe, merek, model, harga, stok, base, boost, core, thread) {
    let n = this.cpu.length + 1;
    this.cpu.push({
      id: 'c' + n.toString(),
      foto: url,
      tipe: tipe,
      merek: merek,
      model: model,
      harga: harga.toString(),
      stok: stok.toString(),
      base: base.toString(),
      boost: boost.toString(),
      core: core.toString(),
      thread: thread.toString(),
    })
  }
  
  addMb(url, tipe, merek, model, harga, stok, chipset, processor) {
    let n = this.motherboard.length + 1;
    this.motherboard.push({
      id: 'm' + n.toString(),
      foto: url,
      tipe: 'Motherboard',
      merek: merek,
      model: model,
      harga: harga.toString(),
      stok: stok.toString(),
      chipset: chipset,
      prosesor: processor,
    })
  }

  addRam(url, tipe, merek, model, harga, stok, speed, ukuran) {
    let n = this.ram.length + 1;
    this.ram.push({
      id: 'r' + n.toString(),
      foto: url,
      tipe: tipe,
      merek: merek,
      model: model,
      harga: harga.toString(),
      stok: stok.toString(),
      speed: speed.toString(),
      ukuran: ukuran.toString(),
    })
  }

  addGpu(url, tipe, merek, model, harga, stok) {
    let n = this.gpu.length + 1;
    this.gpu.push({
      id: 'g' + n.toString(),
      foto: url,
      tipe: tipe,
      merek: merek,
      model: model,
      harga: harga.toString(),
      stok: stok.toString(),
    })
  }
  
}
