import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private service:ServicesService
  ) { }
  
  title: 'ÜRÜNLER' = "ÜRÜNLER";

  ngOnInit(): void {
  }

}
