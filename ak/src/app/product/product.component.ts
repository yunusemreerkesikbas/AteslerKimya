import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title: "ÜRÜNLER" ="ÜRÜNLER";
  products = [
    {
      id:1,
      name: 'GIDA KİMYASALLARI',
      slug:'gida-kimyasallari',
      img: '../../assets/img/pro-image-card-1.jpg'
    },
    {
      id:2,
      name: 'METAL KİMYASALLARI',
      slug:'metal-kimyasallari',
      img: '../../assets/img/pro-image-card-1.jpg'
    },
    {
      id:3,
      name: 'DETERJAN KİMYASALLARI',
      slug:'deterjan-kimyasallari',
      img: '../../assets/img/pro-image-card-1.jpg'
    },
    {
      id:4,
      name: 'İNŞAAT KİMYASALLARI',
      slug:'insaat-kimyasallari',
      img: '../../assets/img/pro-image-card-1.jpg'
    },
    {
      id:5,
      name: 'PLASTİK KİMYASALLARI',
      img: '../../assets/img/pro-image-card-1.jpg'
    },
    {
      id:6,
      name: 'TARIM KİMYASALLARI',
      slug:'tarim-kimyasallari',
      img: '../../assets/img/pro-image-card-1.jpg'
    }
  ]
  ngOnInit(): void {
  }

}
