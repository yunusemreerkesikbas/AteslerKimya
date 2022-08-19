import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceDetail } from './detail';
// import { Service } from './service/service';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  // heroes = ServicesService;
  // selectedHero?: ServicesService["categoryDetail"];
  constructor(
    private route: ActivatedRoute,
    private service: ServicesService
  ) { }

  isShown: boolean = true;
  // public isActive: boolean = false;
  // getMenuId: any;
  serviceDetail: any;

  currentPage: any;



  title: "HİZMETLER" = "HİZMETLER";
  categories = [
    {
      id: 1,
      name: "stoklama",
    },
    {
      id: 2,
      name: "laboratuvar",
    }
  ]




  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentPage = params['categoryname'];
      console.log("currentpage", this.currentPage)
      if (this.currentPage) {
        console.log("categorydetail", this.service.categoryDetail);

        this.serviceDetail = this.service.categoryDetail.filter((value) => {
          let data = value.name == this.currentPage;
          return data;
        });
        console.log("detail", this.serviceDetail);
      }
    });
    console.log("currentpage1", this.currentPage)
  }

 

  toggleShow() {
    this.isShown = !this.isShown;
  }



}
