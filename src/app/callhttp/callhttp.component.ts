import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-callhttp',
  templateUrl: './callhttp.component.html',
  styleUrls: ['./callhttp.component.css']
})
export class CallhttpComponent implements OnInit {
  getdata:any;

  book:any={
    title:'',
    author:''
  }
  constructor(private httpService:HttpService) { }

  ngOnInit() {

  }

  get(){
    this.httpService.getData("posts").subscribe(
      data => {
        this.getdata =data;
      },
      error =>{

      },
      () =>{
        console.log('finish');
      }
    );
  }
  post_data(){
    console.log(this.book);
    this.httpService.postData('posts',this.book).subscribe(
      data => {
        console.log(data)
      },
      error =>{

      },
      () =>{
        console.log('finish');
      }
    )
  }

}
