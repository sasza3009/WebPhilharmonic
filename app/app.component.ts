import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: require('app/app.component.html!text')
})
export class AppComponent {
  isCollapsed: boolean = true;
  currentSearchPhrase: string;

  constructor(private router: Router) { }


}
