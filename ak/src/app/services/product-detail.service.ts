import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor() { }
  category= [
    {
      id:1,
      header:'GIDA KİMYASALLARI',
      header_slug:'gida-kimyasallari',
      name:"Asitlik Düzenleyiciler",
      slug:"asitlik-duzenleyiciler"
    },
    {
      id:2,
      header:'GIDA KİMYASALLARI',
      header_slug:'gida-kimyasallari',
      name:"Tatlandırıcılar",
      slug:"tatlandiricilar"
    },
    {
      id:3,
      header:'GIDA KİMYASALLARI',
      header_slug:'gida-kimyasallari',
      name:"Gıda Boyaları(Suda Çözünen)",
      slug:"gida-boyalari-suda-cozunen"
    },
    {
      id:4,
      header:'GIDA KİMYASALLARI',
      header_slug:'gida-kimyasallari',
      name:"Gıda Boyaları(Yağda Çözünen)",
      slug:"gida-boyalari-yagda-cozunen"
    },
    {
      id:5,
      header:'GIDA KİMYASALLARI',
      header_slug:'gida-kimyasallari',
      name:"Emülgatörler",
      slug:"emulgator"
    },
    {
      id:6,
      header:'GIDA KİMYASALLARI',
      header_slug:'gida-kimyasallari',
      name:"Taşıyıcılar",
      slug:"tasiyicilar"
    },
    {
      id:7,
      header:'GIDA KİMYASALLARI',
      header_slug:'gida-kimyasallari',
      name:"Kabartıcı Ajanlar",
      slug:"kabartici-ajanlar"
    },
    {
      id:8,
      header:'DETERJAN KİMYASALLARI',
      header_slug:'deterjan-kimyasallari',
      name:"test",
      slug:"test"
    },
    {
      id:9,
      header:'DETERJAN KİMYASALLARI',
      header_slug:'deterjan-kimyasallari',
      name:"deneme",
      slug:"deneme"
    },
  ]
  categoryDetail = [
    {
      id:1,
      categoryId:1,
      header_slug:'gida-kimyasallari',
      category_slug:'asitlik-duzenleyiciler',
      name:'Asetik Asit(%80 - 100)',
      slug:'asetik-asit'
    },
    {
      id:2,
      categoryId:1,
      header_slug:'gida-kimyasallari',
      category_slug:'asitlik-duzenleyiciler',
      name:'Fosforik Asit',
      slug:'fosforik-asit'
    },
    {
      id:3,
      categoryId:1,
      header_slug:'gida-kimyasallari',
      category_slug:'asitlik-duzenleyiciler',
      name:'Laktik Asit',
      slug:'laktik-asit'

    },
    {
      id:4,
      categoryId:1,
      header_slug:'gida-kimyasallari',
      category_slug:'asitlik-duzenleyiciler',
      name:'Malik Asit',
      slug:'malik-asit'

    },
    {
      id:5,
      categoryId:1,
      header_slug:'gida-kimyasallari',
      category_slug:'asitlik-duzenleyiciler',
      name:'Sitrik Asit Anhidrat',
      slug:'sitrik-asit-anhidrat'

    },
    {
      id:6,
      categoryId:1,
      header_slug:'gida-kimyasallari',
      category_slug:'asitlik-duzenleyiciler',
      name:'Sitrik Asit Monohidrat',
      slug:'sitrik-asit-monohidrat'

    },
    {
      id:7,
      categoryId:1,
      header_slug:'gida-kimyasallari',
      category_slug:'asitlik-duzenleyiciler',
      name:'Sodyum Hidroksit (Payet-Boncuk Kostik)',
      slug:'sodyum-hidroksit'

    },
    {
      id:8,
      categoryId:1,
      header_slug:'gida-kimyasallari',
      category_slug:'asitlik-duzenleyiciler',
      name:'Tri Sodyum Sitrat',
      slug:'tri-sodyum-sitrat'

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
  DetailDescription = [
    {
      id:1,
      detailId:1,
      img:'../assets/img/pro-asetik-asit.jpg',
      name:'asetik-asit',
      title:'Asetik Asit (%80 - 100)',
      product_code: 'E 260',
      description: `E260 koduna sahiptir. Asetik Asit, zayıf bir asittir ve bu yüzden ev içerisinde temizlik maddesi olarak işlev görür. Örnek olarak, çaydanlıkların kireçten arındırılması, cam ve benzeri parlak yüzeylerin madeni birikimlerinden temizlenmesi, gösterilebilir.

      Asetik Asit'in ayrıca koruma görevi vardır, gıdalarda ve soslarda koruma amaçlı kullanılır. Turşu imalatında da görev alması bu yüzdendir. Sağladığı asitli ortam birçok mikroorganizmanın oluşumuna engel teşkil etmektedir. Bu da turşulaşan sebzelerin ömrünü uzatır. Asitlik sağlayıcı, lezzet verici, koruyucu, şelatlayıcı gibi görevlerde bulunur. Sirke imalatında, ilaç ve kozmetik ürünlerde, apre dağlama maddelerinin yapımında asetik asit kullanılır.
      
      Bunların yanı sıra, kauçuk imalatında koagülatör olarak kullanılır. Ayrıca deri sanayisinde ve boya yapımında işlevi bulunmaktadır. Alüminyum asetat tuzu, taze kesilmiş `
      
    },
    {
      id:2,
      detailId:2,
      img:'../assets/img/pro-asetik-asit.jpg',
      name:'fosforik-asit',
      title:'Fosforik Asit (%80 - 100)',
      product_code: 'E 360',
      description: `E360 koduna sahiptir. Asetik Asit, zayıf bir asittir ve bu yüzden ev içerisinde temizlik maddesi olarak işlev görür. Örnek olarak, çaydanlıkların kireçten arındırılması, cam ve benzeri parlak yüzeylerin madeni birikimlerinden temizlenmesi, gösterilebilir.

      Asetik Asit'in ayrıca koruma görevi vardır, gıdalarda ve soslarda koruma amaçlı kullanılır. Turşu imalatında da görev alması bu yüzdendir. Sağladığı asitli ortam birçok mikroorganizmanın oluşumuna engel teşkil etmektedir. Bu da turşulaşan sebzelerin ömrünü uzatır. Asitlik sağlayıcı, lezzet verici, koruyucu, şelatlayıcı gibi görevlerde bulunur. Sirke imalatında, ilaç ve kozmetik ürünlerde, apre dağlama maddelerinin yapımında asetik asit kullanılır.
      
      Bunların yanı sıra, kauçuk imalatında koagülatör olarak kullanılır. Ayrıca deri sanayisinde ve boya yapımında işlevi bulunmaktadır. Alüminyum asetat tuzu, taze kesilmiş `
      
    },

  ]
  
}
