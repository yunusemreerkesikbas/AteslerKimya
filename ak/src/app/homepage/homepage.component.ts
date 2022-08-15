import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  short_desc: "GÜÇLÜ İTHALAT AĞIMIZLA" = "GÜÇLÜ İTHALAT AĞIMIZLA"; 
  long_desc: "kaliteyi sizlerle buluşturuyoruz...." = "kaliteyi sizlerle buluşturuyoruz...."; 
  ngOnInit(): void {
  }

}
