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

  isShown: boolean = true ;
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
      this.currentPage = params['categoryid'];
      console.log(this.currentPage)
    });

    if (this.currentPage) {
      this.serviceDetail = this.service.categoryDetail.filter((value) => {
        let data = value.id == this.currentPage;
        this.currentPage = this.currentPage
        return data;
      });
      console.log(this.serviceDetail);
    }
    return this.serviceDetail;


  }
  toggleShow() {
    this.isShown = !this.isShown;
  }
  


}
