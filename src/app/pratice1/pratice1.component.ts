import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice1',
  templateUrl: './pratice1.component.html',
  styleUrls: ['./pratice1.component.css']
})
export class Pratice1Component implements OnInit {
  zzz:EnglishDic = {
    English:'',
    Chinese:''
  }

  filter:string

  ppp:EnglishDic[]=[]


  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log(this.zzz);
    let _dic:EnglishDic = Object.assign({},this.zzz);

    this.ppp.push(_dic);
    console.log(this.ppp);
  }
}
export interface EnglishDic{
  English:string,
  Chinese:string
}