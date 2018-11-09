import { Component, OnInit } from '@angular/core';
import {IBooks} from '../book';
import {BooklistService } from '../booklist.service';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})


export class AddBookComponent implements OnInit {

  constructor(private _booklistService: BooklistService) { }

createBook(id1: any, title1: string, isbn1: string, author1: string, rating1: number, genre1: string)
{
  this._booklistService.addBook(id1,title1,isbn1,author1,rating1,genre1).subscribe(
     data => console.log("Finally")
  )
}
  ngOnInit() {
   
  }

}