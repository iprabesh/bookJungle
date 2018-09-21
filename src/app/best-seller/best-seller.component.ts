import { Component, OnInit } from '@angular/core';

import {BooklistService } from '../booklist.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {

 public bookList = [];

  constructor(private _booklistService: BooklistService) { }

  ngOnInit() {
  	this.bookList = this._booklistService.getBookList();
  }

}
