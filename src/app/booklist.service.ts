import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {IBooks} from './book';
import { Observable } from 'rxjs/Observable';





@Injectable()
export class BooklistService {
	private newBook: IBooks;

	

	private _url = "https://localhost:5001/api/bookitem"; //5001 for VS code 44350 for VS
	constructor( private http: HttpClient) { }




  getBookList(): Observable<IBooks[]> {
		return this.http.get<IBooks[]>(this._url);
  }	
 

		  addBook(id1, title1, isbn1, author1, rating1, genre1): Observable<IBooks> {
			
			//console.log("add: "+ this.id1);
			this.newBook = new IBooks( id1, title1, isbn1, author1, rating1, genre1 );
console.log("working");
		    return this.http.post<IBooks>(this._url, this.newBook).pipe(

		     // catchError(this.handleError('addBook', newBook))
		    );
			}  
}
