import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private id;
  private product;
  private type;
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

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
    this.product[0].harga = this.product[0].harga.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
  }

}
