import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  server= 'http://localhost:3000/';
  constructor(private _http: HttpClient) { }

  getData(url:string){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.get(this.server + url, {headers : headers})
  }
  postData(url: string,body_data: any){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post(this.server + url,body_data,{headers : headers})
  }
  putData(){

  }

  deletData(){

  }

}
