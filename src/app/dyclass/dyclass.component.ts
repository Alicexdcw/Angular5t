import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dyclass',
  templateUrl: './dyclass.component.html',
  styleUrls: ['./dyclass.component.css']
})
export class DyclassComponent implements OnInit {
  @ViewChild('pc') pc:ElementRef;
  number:any;
  number2:any;
  // numberAdd=0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.number = +this.route.snapshot.params.number;
    this.number2 = +this.route.snapshot.params.number2;
    // this.numberAdd=Number(this.number)+Number(this.number2);
  }
  addc(){
    // this.pc.nativeElement.className="";
    this.pc.nativeElement.classList.add('rdd');
    this.pc.nativeElement.classList.remove('yellow');
  }
  addy(){
    this.pc.nativeElement.classList.add('yellow');
    this.pc.nativeElement.classList.remove('rdd');
  }


}
