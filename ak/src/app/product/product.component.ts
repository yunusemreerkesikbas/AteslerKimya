import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class ProductComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

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
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    }))
    state('closed', style({
      height: '100px',
      opacity: 0.8,
      backgroundColor: 'blue'
    }))
    transition('open => closed', [
      animate('1s')
    ])
  }
  

}
