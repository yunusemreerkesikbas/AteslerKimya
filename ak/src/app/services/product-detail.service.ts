import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor() { }
  category= [
    {
      id:1,
      name:"Asitlik Düzenleyiciler",
      slug:"asitlik-duzenleyiciler"
    },
    {
      id:2,
      name:"Tatlandırıcılar",
      slug:"tatlandiricilar"
    },
    {
      id:3,
      name:"Gıda Boyaları(Suda Çözünen)",
      slug:"gida-boyalari-suda-cozunen"
    },
    {
      id:4,
      name:"Gıda Boyaları(Yağda Çözünen)",
      slug:"gida-boyalari-yagda-cozunen"
    },
    {
      id:5,
      name:"Emülgatörler",
      slug:"emulgator"
    },
    {
      id:6,
      name:"Taşıyıcılar",
      slug:"tasiyicilar"
    },
    {
      id:7,
      name:"Kabartıcı Ajanlar",
      slug:"kabartici-ajanlar"
    },
  ]
  categoryDetail = [
    {
      id:1,
      categoryId:1,
      name:'Asetik Asit(%80 - 100)',
    },
    {
      id:2,
      categoryId:1,
      name:'Fosforik Asit',
    },
    {
      id:3,
      categoryId:1,
      name:'Laktik Asit',
    },
    {
      id:4,
      categoryId:1,
      name:'Malik Asit',
    },
    {
      id:5,
      categoryId:1,
      name:'Sitrik Asit Anhidrat',
    },
    {
      id:6,
      categoryId:1,
      name:'Sitrik Asit Monohidrat',
    },
    {
      id:7,
      categoryId:1,
      name:'Sodyum Hidroksit (Payet-Boncuk Kostik)',
    },
    {
      id:8,
      categoryId:1,
      name:'Tri Sodyum Sitrat',
    },
    {
      id:9,
      categoryId:2,
      name:'test',
    },
    {
      id:10,
      categoryId:2,
      name:'testt',
    },
    {
      id:11,
      categoryId:2,
      name:'testtt',
    },
  ]
  
}
