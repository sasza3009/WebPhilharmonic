import { LegoSet, Status } from './LegoSet'
import { LegoSetService } from './legoSet.service';
import { LegoShopService } from './legoShop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    template: require('app/contact.component.html!text')
})
export class ContactComponent implements OnInit {

  //  currentLegoSet: LegoSet = new LegoSet();
   // statuses: string[] = [Status[Status.New], Status[Status.Used]];

   
    
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit() {
        

    }

    

}
