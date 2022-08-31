import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceDetail } from './detail';
// import { Service } from './service/service';
import { ServicesService } from '../services/services.service';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  // animations: [
  //   trigger("listAnimation", [
  //     state("fadeUp", style({color:'#000' })),
  //     transition(":enter", [
  //       style({transition: '300ms ease-in',color:'#000' }),
  //       animate("500ms")
  //     ]),
  //     transition(':leave', [
  //       animate(500, style({ transform: 'translateX(0%))', color:'#000' }))
  //     ])
  //   ])
  // ]
})
export class ServiceComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ServicesService
  ) { }

  isShown: boolean = true;
  // activeClass:any
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
      if (this.currentPage) {
        this.serviceDetail = this.service.categoryDetail.filter((value) => {
          let data = value.name == this.currentPage;
          return data;
        });
      }
    });
  }



  toggleShow() {
    this.isShown = !this.isShown;
  }
  isActiveProject: boolean | undefined;

  // activeProject() {
  //   this.isActiveProject = true;
  // }




}
