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
    // private header:ProductComponent
    // private product:ProductComponent
  ) { }
  category: any;
  categoryTitle: any;
  serviceDetail: any;
  currentPage: any;
  description: any;
  detailPage: any;
  isShown: boolean = true;
  // pro: ProductComponent = new ProductComponent;

  title: 'ÜRÜNLER' = "ÜRÜNLER";
  group_title: 'SEKTÖRE GÖRE' = "SEKTÖRE GÖRE";
  group_alt_title: 'ÜRÜN GRUPLARI' = "ÜRÜN GRUPLARI";
  categories = [
    {
      category: 'GIDA KİMYASALLARI',
      header: 'gida-kimyasallari',
      id: 1,
      name: "Asitlik Düzenleyiciler",
      slug: "asitlik-duzenleyiciler"
    },
    {
      category: 'GIDA KİMYASALLARI',
      header: 'gida-kimyasallari',
      id: 2,
      name: "Tatlandırıcılar",
      slug: "tatlandiricilar"
    },
    {
      category: 'GIDA KİMYASALLARI',
      header: 'gida-kimyasallari',
      id: 3,
      name: "Gıda Boyaları(Suda Çözünen)",
      slug: "gida-boyalari-suda-cozunen"
    },
    {
      category: 'GIDA KİMYASALLARI',
      header: 'gida-kimyasallari',
      id: 4,
      name: "Gıda Boyaları(Yağda Çözünen)",
      slug: "gida-boyalari-yagda-cozunen"
    },
    {
      category: 'GIDA KİMYASALLARI',
      header: 'gida-kimyasallari',
      id: 5,
      name: "Emülgatörler",
      slug: "emulgator"
    },
    {
      category: 'GIDA KİMYASALLARI',
      header: 'gida-kimyasallari',
      id: 6,
      name: "Taşıyıcılar",
      slug: "tasiyicilar"
    },
    {
      category: 'DETERJAN KİMYASALLARI',
      header: 'deterjan-kimyasallari',
      id: 7,
      name: "deneme",
      slug: "deneme"
    },
    {
      category: 'DETERJAN KİMYASALLARI',
      header: 'deterjan-kimyasallari',
      id: 8,
      name: "test",
      slug: "test"
    },
    {
      category: 'DETERJAN KİMYASALLARI',
      header: 'deterjan-kimyasallari',
      id: 9,
      name: "test 2",
      slug: "test 2"
    },

  ]

  ngOnInit(): void {


    this.route.params.subscribe(params => {
      this.category = params['productsheader']
      if (this.category) {
        this.categoryTitle = this.detail.category.filter((value) => {
          let data = value.header_slug == this.category;
          return data;
        });

        return this.categoryTitle;
      }
    });



    this.route.params.subscribe(params => {
      this.route.data.subscribe(data => {
        this.currentPage = params['categoryslug'];

        // console.log("currentpage", this.currentPage)
        if (this.currentPage) {
          // console.log("categorydetail", this.detail.categoryDetail);
          this.serviceDetail = this.detail.categoryDetail.filter((value) => {
            let data = value.categoryId == this.currentPage;
            return data;
          });
          // console.log("detail", this.serviceDetail);
          return this.serviceDetail;
        }

      });
    });
    this.route.params.subscribe(params => {
      this.route.data.subscribe(data => {
        this.route.data.subscribe(data => {
          this.description = params['categoryDetailslug'];
          if (this.description) {
            this.detailPage = this.detail.DetailDescription.filter((value) => {
              let data = value.name == this.description;
              return data;
            })
            return this.detailPage;
          }
        })
      })
    })

  }
  toggleShow() {
    this.isShown = !this.isShown;
  }
  status: boolean = true;
  clickEvent() {
    this.status = !this.status;
  }
}
