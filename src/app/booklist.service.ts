import { Injectable } from '@angular/core';

@Injectable()
export class BooklistService {
  getBookList(){
  	return [
  	{"title": "Java Your Way", "isbn": "001-00-0001", "author": "Ram"},
  	{"title": "Python Your Way", "isbn": "001-00-0001", "author": "Ram"},
  	{"title": "Ruby Your Way", "isbn": "001-00-0001", "author": "Ram"},
  	{"title": "PHP Your Way", "isbn": "001-00-0001", "author": "Ram"}
  	]
  }	
  constructor() { }

}
