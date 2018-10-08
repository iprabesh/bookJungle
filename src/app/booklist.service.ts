import { Injectable } from '@angular/core';

@Injectable()
export class BooklistService {
  getBookList(){
  	return [
  	{"title": "Java Your Way", "isbn": "001-00-0001", "author": "Sam"},
  	{"title": "Python Your Way", "isbn": "001-00-0002", "author": "Ram"},
  	{"title": "Ruby Your Way", "isbn": "001-00-0003", "author": "Tina"},
  	{"title": "PHP Your Way", "isbn": "001-00-0004", "author": "Shyam"}
  	]
  }	
  constructor() { }

}
