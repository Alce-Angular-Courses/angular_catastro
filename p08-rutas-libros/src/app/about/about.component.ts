import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  usuario: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Sin Rx
    // const user = this.activatedRoute.snapshot.params['amigo'];
    // Con RX
    let user;
    const user$: Observable<any> = this.activatedRoute.params;
    user$.subscribe ((parametros) => {
      user = parametros['amigo'] || 'amigo';
    });
    // En ambos casos
     this.usuario = user || 'amigo';
  }

}
