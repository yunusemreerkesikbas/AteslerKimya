import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorporateService } from '../services/corporate.service';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {
  isShown: boolean = true;


  constructor(
    private route:ActivatedRoute,
    private corporate:CorporateService
  ) { }
  corporateDetail: any;
  currentPage: any;
  title: "KURUMSAL" = "KURUMSAL";
  categories = [
    {
      id:1,
      name:"hakkımızda",
      slug:'hakkimizda'
    },
    {
      id:2,
      name:"değerlerimiz",
      slug:'degerlerimiz'
    },
    {
      id:3,
      name:"gücümüz",
      slug:'gucumuz'
    },
    {
      id:4,
      name:"VİZYONUMUZ",
      slug:'vizyonumuz'
    },
    {
      id:5,
      name:"misyonumuz",
      slug:'misyonumuz'
    },
    {
      id:6,
      name:"haberler",
      slug:'haberler'
    },
  ]
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPage = params['categoryid'];
      console.log(this.currentPage)
    });

    if (this.currentPage) {
      this.corporateDetail = this.corporate.categoryDetail.filter((value) => {
        let data = value.id == this.currentPage;
        this.currentPage = this.currentPage
        return data;
      });
      console.log(this.corporateDetail);
    }
    return this.corporateDetail;
  }
  toggleShow() {
    this.isShown = ! this.isShown;
    
  }

}
