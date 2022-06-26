import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cpm-client';
  name = 'Complete Patient Records - Producer';

  constructor(private router: Router) {
    this.router.events.subscribe(value => {
      if(value instanceof  NavigationEnd){
        if (this.router.url === '/cpm-consumer') {
          this.name = 'Complete Patient Records - Consumer';
        }
      }
    })

  }

}
