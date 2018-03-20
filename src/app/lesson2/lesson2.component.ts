import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BmiService } from '../bmi.service';


@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {

  @Input() score = 60;

  @Output() countChange:EventEmitter<number> = new EventEmitter<number>();

  constructor(private bmiService:BmiService) { }

  ngOnInit() {
    this.bmiService.pub_temp1=99;
  }

  change(event:any){
   this.countChange.emit(event)
  }

}
