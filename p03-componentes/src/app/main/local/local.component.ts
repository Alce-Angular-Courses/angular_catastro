import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @ViewChild('name') sLocal: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log(this.sLocal.nativeElement);
  }
}
