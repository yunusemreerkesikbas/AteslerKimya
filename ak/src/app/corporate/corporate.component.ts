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
      corporate:'kurumsal',
      name:"hakkımızda",
      slug:'hakkimizda'
    },
    {
      id:2,
      corporate:'kurumsal',
      name:"değerlerimiz",
      slug:'degerlerimiz'
    },
    {
      id:3,
      corporate:'kurumsal',
      name:"gücümüz",
      slug:'gucumuz'
    },
    {
      id:4,
      corporate:'kurumsal',
      name:"VİZYONUMUZ",
      slug:'vizyonumuz'
    },
    {
      id:5,
      corporate:'kurumsal',
      name:"misyonumuz",
      slug:'misyonumuz'
    },
    {
      id:6,
      corporate:'kurumsal',
      name:"haberler",
      slug:'haberler'
    },
  ]
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPage = params['categoryslug'];
      // console.log("currentpage", this.currentPage)
      if (this.currentPage) {
        // console.log("categorydetail", this.corporate.categoryDetail);

        this.corporateDetail = this.corporate.categoryDetail.filter((value) => {
          let data = value.url == this.currentPage;
          return data;
        });
        // console.log("detail", this.corporateDetail);
      }
    });
    // console.log("currentpage1", this.currentPage)
  }
  toggleShow() {
    this.isShown = ! this.isShown;
    
  }
  isActiveProject: boolean | undefined;

  activeProject() {
    this.isActiveProject = true;
  }

}
