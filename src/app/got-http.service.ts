import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GotHttpService {

  public currentBook;
  public currentChar;
  public currentHouse;
  public baseUrl = 'https://anapioficeandfire.com/api';

  public getAllBooks():any{
    let myResponse = this._http.get(this.baseUrl + '/books')
    console.log(myResponse)
    return myResponse;
  }

  public getSingleBookInfo(currentBookName): any {

  }

  public getAllChars():any{
    let myResponse = this._http.get(this.baseUrl + '/characters')
    console.log(myResponse)
    return myResponse;
  }

  public getSingleCharInfo(currentCharUrl): any {

  }

  public getAllHouses():any{
    let myResponse = this._http.get(this.baseUrl + '/houses')
    console.log(myResponse)
    return myResponse;
  }


  public getSingleHouseInfo(currentHouseName): any {

  }

  constructor(private _http:HttpClient) {
    console.log("got-http service called");

   }

}
