import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GotService } from '../got.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.css'],
  providers: [Location]
})
export class CharDetailsComponent implements OnInit {

  public currentChar

constructor(private _route: ActivatedRoute, private router: Router,public gotService:GotService,private location:Location) {
    console.log("constructor is called");

   }

   public goBackToPrevPage(): any {
    this.location.back();
   }

  ngOnInit() {
    console.log("ngOnInit is called");
    // getting the book name from route
    let charUrl = this._route.snapshot.paramMap.get('url');
    console.log(charUrl)
    this.currentChar=this.gotService.getSingleCharInfo(charUrl);
    console.log(this.currentChar)

  }

}
