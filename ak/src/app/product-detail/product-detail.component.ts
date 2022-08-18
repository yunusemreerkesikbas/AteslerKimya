import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ServiceComponent } from '../service/service.component';
import { ProductDetailService } from '../services/product-detail.service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  page: any;

  constructor(
    private route: ActivatedRoute,
    private detail: ProductDetailService,
    // private product:ProductComponent
  ) { }
  serviceDetail: any;
  currentPage: any;
  isShown: boolean = true;
  // pro: ProductComponent = new ProductComponent;

  title: 'ÜRÜNLER' = "ÜRÜNLER";
  group_title: 'SEKTÖRE GÖRE' = "SEKTÖRE GÖRE";
  group_alt_title: 'ÜRÜN GRUPLARI' = "ÜRÜN GRUPLARI";
  categories = [
    {
      header: 'gida-kimyasallari',
      id: 1,
      name: "Asitlik Düzenleyiciler",
      slug: "asitlik-duzenleyiciler"
    },
    {
      header: 'gida-kimyasallari',
      id: 2,
      name: "Tatlandırıcılar",
      slug: "tatlandiricilar"
    },
    {
      header: 'gida-kimyasallari',
      id: 3,
      name: "Gıda Boyaları(Suda Çözünen)",
      slug: "gida-boyalari-suda-cozunen"
    },
    {
      header: 'gida-kimyasallari',
      id: 4,
      name: "Gıda Boyaları(Yağda Çözünen)",
      slug: "gida-boyalari-yagda-cozunen"
    },
    {
      header: 'gida-kimyasallari',
      id: 5,
      name: "Emülgatörler",
      slug: "emulgator"
    },
    {
      header: 'gida-kimyasallari',
      id: 6,
      name: "Taşıyıcılar",
      slug: "tasiyicilar"
    },
    {
      header: 'gida-kimyasallari',
      id: 7,
      name: "Kabartıcı Ajanlar",
      slug: "kabartici-ajanlar"
    },
  ]

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.route.data.subscribe(data => {
        this.currentPage = params['categoryslug'];

        console.log("currentpage", this.currentPage)
        if (this.currentPage) {
          console.log("categorydetail", this.detail.categoryDetail);
          this.serviceDetail = this.detail.categoryDetail.filter((value) => {
            let data = value.categoryId == this.currentPage;
            return data;
          });
          console.log("detail", this.serviceDetail);
          return this.serviceDetail;
        }

      });
    });
    console.log("currentpage1", this.currentPage)
  }
  toggleShow() {
    this.isShown = !this.isShown;
  }
}
