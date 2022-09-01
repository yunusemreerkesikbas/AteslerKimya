import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }
  short_desc: "GÜÇLÜ İTHALAT AĞIMIZLA" = "GÜÇLÜ İTHALAT AĞIMIZLA"; 
  long_desc: "kaliteyi sizlerle buluşturuyoruz...." = "kaliteyi sizlerle buluşturuyoruz...."; 
  @HostListener('wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // Scroll down go to gallery
    if (evento.deltaY > 0) {
      this._router.navigate(['/urunler'])
      // Scroll up go to about
    } else {
      this._router.navigate(['/'])
    }
  }
  ngOnInit(): void {
  }

}
