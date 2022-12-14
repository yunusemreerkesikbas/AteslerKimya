import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorporateService {

  constructor() { }
  categoryDetail = [
    {
      id:1,
      categoryId:1,
      url:'hakkimizda',
      categoryImg: '../assets/img/corporate-img.jpg',
      description: "HAKKIMIZDA detay sayfası"
    },
    {
      id:2,
      categoryId:2,
      url:'degerlerimiz',
      categoryImg: '../assets/img/corporate-img.jpg',
      description: "Değerlerimiz detay sayfası"
    },
    {
      id:3,
      categoryId:3,
      url:'gucumuz',
      categoryImg: '../assets/img/corporate-img.jpg',
      description: "Gücümüz detay sayfası"
    },
    {
      id:4,
      categoryId:4,
      url:'vizyonumuz',
      categoryImg: '../assets/img/corporate-img.jpg',
      description: "Vizyonumuz detay sayfası"
    },
    {
      id:5,
      categoryId:5,
      categoryImg: '../assets/img/corporate-img.jpg',
      description: "Misyonumuz detay sayfası"
    },
    {
      id:6,
      categoryId:6,
      url:'haberler',
      categoryImg: '../assets/img/corporate-img.jpg',
      description: "Haberler detay sayfası"
    },
  ]
}
