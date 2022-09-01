import { Component, HostBinding, AfterViewInit, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { debounceTime, fromEvent } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

  ]
})
export class AppComponent implements OnInit {

  title = 'Ateşler Kimya';
  currentSection = 'section1';

  constructor(private _router: Router) {
  }
  // @HostListener('wheel', ['$event'])
  // onWheelScroll(evento: WheelEvent) {
  //   // Scroll down go to gallery
  //   if (evento.deltaY > 0) {
  //     this._router.navigate(['/urunler'])
  //     // Scroll up go to about
  //   } else {
  //     this._router.navigate(['/'])
  //   }
  // }

  ngOnInit() {
    // this._route.params.subscribe(params => {
    //   this.currentSection = params['urunler'];
    //   console.log('section', this.currentSection);
    //   this.scrollTo(this.currentSection);
    // });
  }

  // onSectionChange(sectionId: string) {
  //   this._location.go(sectionId);
  //   this.currentSection = sectionId;
  // }

  // scrollTo(section: string) {

  //   document.getElementById(section)?.scrollIntoView();

  // }

}



