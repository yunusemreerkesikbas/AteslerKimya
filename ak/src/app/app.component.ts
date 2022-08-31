import { Component, HostBinding, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.currentSection = params['urunler'];
      console.log('section',this.currentSection);
      this.scrollTo(this.currentSection);
    });
  }

  onSectionChange(sectionId: string) {
    this._location.go(sectionId);
    this.currentSection = sectionId;
  }

  scrollTo(section: string) {
    
    document.getElementById(section)?.scrollIntoView();
    
  }
}
  


