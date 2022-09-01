import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { ServiceDetail } from './detail';
// import { Service } from './service/service';
import { ServicesService } from '../services/services.service';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  // animations: [
  //   trigger("inOutPaneAnimation", [
  //     transition(":enter", [
  //       style({ opacity: 0, transform: "translateX(-100%)" }), //apply default styles before animation starts
  //       animate(
  //         "750ms ease-in-out",
  //         style({ opacity: 1, transform: "translateX(0)" })
  //       )
  //     ]),
  //     transition(":leave", [
  //       style({ opacity: 1, transform: "translateX(0)" }), //apply default styles before animation starts
  //       animate(
  //         "600ms ease-in-out",
  //         style({ opacity: 0, transform: "translateX(-100%)" })
  //       )
  //     ])
  //   ])
  // ]
})
export class ServiceComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: ServicesService,
    private _router:Router
  ) { }

  @HostListener('wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll down go to gallery
    if (evento.deltaY > 0) {
      this._router.navigate(['/kurumsal'])
      // Scroll up go to about
    } else {
      this._router.navigate(['/'])
    }
  }

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
  

  




}
