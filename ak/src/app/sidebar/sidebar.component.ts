import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  pages = [
    {
      id:1,
      name:'Intro',
      slug:''
    },
    {
      id:2,
      name:'Ürünler',
      slug:'urunler'
    },
    {
      id:3,
      name:'Hizmetler',
      slug:'hizmetler'
    },
    {
      id:4,
      name:'Kurumsal',
      slug:'kurumsal'
    },
    {
      id:5,
      name:'İletişim',
      slug:'iletisim'
    },
    {
      id:6,
      name:'İK',
      slug:'ik'
    },
  ]


  ngOnInit(): void {
  }
  
}
