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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

  ]
})
export class AppComponent implements OnInit {

  title = 'Ateşler Kimya';
  previousPosition = -1;
  public scroll: boolean | undefined;
  @ViewChild('wrapper') wrapperElement: ElementRef | undefined;

  ngOnInit() {
    this.scroll = false;
    fromEvent(window, 'mousewheel').pipe(debounceTime(0)).subscribe(($event: WheelEvent) => {
      const position = $event.wheelDelta || -$event.detail;
      if ($event.wheelDelta >= 0) {
        console.log('go up');
        this.scroll = true;
      } else {
        console.log('go down');
        this.scroll = false;
      }

      this.previousPosition = position;
      $event.stopImmediatePropagation();
      $event.stopPropagation();
      $event.preventDefault();
    })
    // pipe(debounceTime(0)).subscribe(($event: WheelEvent) => {

  };
}
  


