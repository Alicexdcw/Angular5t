import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {
  weekday: string[] = ["1","2","3","4"]
  users:Object[]=[
    {"name":"Lux","address":"taipei"},
    {"name":"L","address":"t"}
  ]

  score: string[]=["10","20","30","40","50","60","70","80"]

  

  constructor() { }

  ngOnInit() {
  }

}
