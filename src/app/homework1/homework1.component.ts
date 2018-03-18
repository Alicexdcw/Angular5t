import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.css']
})
export class Homework1Component implements OnInit {
  zzz:ScoreDic = {
    name:'',
    score:''
  }

  filter:string

  ppp:ScoreDic[]=[]

  constructor() { }

  ngOnInit() {
  }
  save(){
    console.log(this.zzz);
    let _dic:ScoreDic = Object.assign({},this.zzz);

    this.ppp.push(_dic);
    console.log(this.ppp);
  }

}

export interface ScoreDic{
  name:string,
  score:string
}
