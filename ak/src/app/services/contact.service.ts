import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  categoryDetail = [
    {
      id:1,
      categoryId:1,
      name:'İletişim Bilgileri',
      slug:'iletisim-bilgileri',
      address:'Fevzi Çakmak Mah. 10768 Sk. C Blok No: 4/B Karatay/Konya',
      tel:'+90 (332) 345 00 81',
      email_1:'info@ateslerkimyevi.com',
      email_2:'satis@ateslerkimyevi.com',
      email_3:'muhasebe@ateslerkimyevi.com',
      map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100784.10589875409!2d32.374113606548974!3d37.8719106802748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085d591159b93%3A0x2756a75199c327e8!2sAte%C5%9Fler%20Kimyevi%20Maddeler!5e0!3m2!1str!2str!4v1660345228828!5m2!1str!2str'
    },
    {
      id:1,
      categoryId:1,
      name:'İletişim Formu',
      slug:'iletisim-formu',
      address:'Fevzi Çakmak Mah. ',
      tel:'+90 (332) 345 00 81',
      email_1:'info@ateslerkimyevi.com',
      email_2:'satis@ateslerkimyevi.com',
      email_3:'muhasebe@ateslerkimyevi.com',
      map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100784.10589875409!2d32.374113606548974!3d37.8719106802748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085d591159b93%3A0x2756a75199c327e8!2sAte%C5%9Fler%20Kimyevi%20Maddeler!5e0!3m2!1str!2str!4v1660345228828!5m2!1str!2str'
    },
  ]
}
