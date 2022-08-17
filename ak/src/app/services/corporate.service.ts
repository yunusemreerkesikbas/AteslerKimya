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
      categoryImg: 'https://i.dunya.com/storage/files/images/2021/02/04/depo-S7By_cover.jpg',
      description: "HAKKIMIZDA detay sayfası"
    },
    {
      id:2,
      categoryId:2,
      categoryImg: 'https://detammobilsaglik.com/wp-content/uploads/2018/04/T%C4%B1bbi-Laboratuvar.jpg',
      description: "Değerlerimiz detay sayfası"
    },
    {
      id:3,
      categoryId:3,
      categoryImg: 'https://detammobilsaglik.com/wp-content/uploads/2018/04/T%C4%B1bbi-Laboratuvar.jpg',
      description: "Gücümüz detay sayfası"
    },
    {
      id:4,
      categoryId:4,
      categoryImg: 'https://detammobilsaglik.com/wp-content/uploads/2018/04/T%C4%B1bbi-Laboratuvar.jpg',
      description: "Vizyonumuz detay sayfası"
    },
    {
      id:5,
      categoryId:5,
      categoryImg: 'https://detammobilsaglik.com/wp-content/uploads/2018/04/T%C4%B1bbi-Laboratuvar.jpg',
      description: "Misyonumuz detay sayfası"
    },
    {
      id:6,
      categoryId:6,
      categoryImg: 'https://detammobilsaglik.com/wp-content/uploads/2018/04/T%C4%B1bbi-Laboratuvar.jpg',
      description: "Haberler detay sayfası"
    },
  ]
}
