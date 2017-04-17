import {Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'game',
  template: require('app/game.component.html!text')
})
export class GameComponent {
  show: boolean = false;
  initialized: boolean=false;
  input: number;
  score: String;
  headline="Kliknij rozpocznij, aby komputer wylosował liczbę:";
  count:number;
  number:number;
  
  constructor(private router: Router) { }

  createNewGame(){
    this.score="";
    this.headline="Komputer wylosował już liczbę. Jeżeli chcesz rozpocząć nową grę, kliknij:";
    this.count=0;
    this.number=Math.floor(Math.random() * 100) + 1  ;
    this.initialized=true;
    this.input=null;
  }

  compare(){
    this.show=true;
    this.count++;
    if(this.input !=this.number){
       if(this.input < this.number){
          this.score="Twoja liczba jest za mała, wpisz inną liczbę.";
        }
        if(this.input > this.number){
          this.score="Twoja liczba jest za duża, wpisz inną liczbę.";
        }
    }
    else 
      this.score="Gratulacje! Trafiłeś za " + this.count + " podejściem.";
  }
}
  

