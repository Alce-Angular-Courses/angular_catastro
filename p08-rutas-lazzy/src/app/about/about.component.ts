import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  sUser: string;
  constructor(public activatedRoute: ActivatedRoute,
              public router: Router) { }

  ngOnInit() {
    // let user;
    const user$: Observable<any> = this.activatedRoute.params;
    user$.subscribe ((parametros) => {
    this.sUser = parametros['name'] || 'amigo';
    });
  }

  gotoInicio() {
    this.router.navigate(['inicio']);

  }
}
