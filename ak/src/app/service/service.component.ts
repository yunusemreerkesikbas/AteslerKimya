import { Component, OnInit } from '@angular/core';
import { DetailService } from './detail';
import { Service } from './service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  isShown: boolean = false;

  constructor() { }
  title: "HİZMETLER" = "HİZMETLER";
  services: Service[] = [];
  details: DetailService[] = [];
  categories = [
    {
      id:1,
      name: "stoklama",
    },
    {
      id:2,
      name: "laboratuvar",
    }
  ]
  categoryDetail = [
    {
      id:1,
      categoryId:1,
      categoryImg: 'url(../../assets/img/services-img.jpg)',
      description: "Stoklama detay sayfası"
    },
    {
      id:2,
      categoryId:2,
      categoryImg: 'url(../../assets/img/services-img.jpg)',
      description: "Laboratuvar detay sayfası"
    },
  ]
  ngOnInit(): void {
  }
  toggleShow() {
    this.isShown = ! this.isShown;
    
    }

}
