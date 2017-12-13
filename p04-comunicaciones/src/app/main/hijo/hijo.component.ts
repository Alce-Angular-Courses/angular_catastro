import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
 } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {

  // aDatos: string[];
  // aDatos: Array<string>;
  @Input() sName: string;
  @Output() emitir: EventEmitter<string>;
  constructor() {
    this.emitir = new EventEmitter();
   }

  ngOnInit() {
    this.sName = '';
  }

  btnBorrar() {
    // this.sName = '';
    this.emitir.emit(this.sName);
  }
}
