import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {IBooks} from './book';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BooklistService {

	private _url = "https://localhost:5001/api/bookitem";
	constructor( private http: HttpClient) { }

  getBookList(): Observable<IBooks[]> {
		return this.http.get<IBooks[]>(this._url);
  }	
 

}
