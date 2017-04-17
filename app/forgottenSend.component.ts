import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegoShopSet } from './LegoShopSet';
import { LegoShopService } from './legoShop.service';
import 'rxjs/add/operator/mergeMap';


@Component({
  template: require('./forgottenSend.component.html!text')
  
})
export class ForgottenSendComponent implements OnInit {

 

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(val => {
      const searchPhrase: string = val['query'];
     
    });
  }

  
}