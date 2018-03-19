import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homework2-btn',
  templateUrl: './homework2-btn.component.html',
  styleUrls: ['./homework2-btn.component.css']
})
export class Homework2BtnComponent implements OnInit {
  @Output() OpNumber1:EventEmitter<any>=new EventEmitter<any>();
  @Output() OpNumber2:EventEmitter<any>=new EventEmitter<any>();
  @Input() numberAdd;
  number1=0;
  number2=0;
  add(){
   
    this.OpNumber1.emit(this.number1);
    this.OpNumber2.emit(this.number2);
    this.numberAdd = Number(this.number1) + Number(this.number2)
  }
  constructor() { }

  ngOnInit() {
  }

}
