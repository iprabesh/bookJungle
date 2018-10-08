import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable()
export class BooklistService {

	private _url = "https://raw.githubusercontent.com/iprabesh/bookJungle/master/bookList.json"

  getBookList(){
		return this.http.get(this._url);
  }	
  constructor( private http: HttpClient) { }

}
