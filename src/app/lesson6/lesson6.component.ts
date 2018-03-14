import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {

  les6:number=0


  constructor() { }

  ngOnInit() {
  }

  change(event){
    console.log(event)
    this.les6 = event
  }

  aaa(){
    console.log('大家好')
  }

  bbb(){
    
  }

  ccc(){

  }

}
