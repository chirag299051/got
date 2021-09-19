import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GotService } from '../got.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [Location]
})
export class BookDetailsComponent implements OnInit {

  public currentBook;

  constructor(private _route: ActivatedRoute, private router: Router,public gotService:GotService,private location:Location) {
    console.log("constructor is called");

   }

   public goBackToPrevPage(): any {
     this.location.back();
   }

  ngOnInit() {
    console.log("ngOnInit is called");
    // getting the book name from route
    let bookName = this._route.snapshot.paramMap.get('name');
    console.log(bookName)
    this.currentBook=this.gotService.getSingleBookInfo(bookName);
    console.log(this.currentBook)

  }

}
