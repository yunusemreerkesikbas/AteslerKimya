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
  // Restrain scrolling inside an element, when the cursor is over it
  restrainScrolling(evt: WheelEvent) {
    const elem = evt.currentTarget as Element;
    const scrollTop = elem.scrollTop;

    if (evt.deltaY < 0) {
      // Trying to scroll up: Prevent scrolling if already at the top.
      if (scrollTop < 1) {
        evt.preventDefault();
      }
    } else {
      // Trying to scroll down: Prevent scrolling if already at the bottom.
      const maxScrollTop = elem.scrollHeight - elem.clientHeight;
      if (maxScrollTop - scrollTop < 1) {
        evt.preventDefault();
      }
    }
  }
}
