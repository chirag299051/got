import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotService } from '../got.service';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBooks=[];
  public allCharacters;
  public allHouses;

  ngOnDestroy() {
    console.log("Home component destroyed")
  }

  constructor(public gotHttpService:GotHttpService) {
    console.log("Home component constructor called")
   }

  ngOnInit() {
    console.log("Home component OnInit called")

    //this.allBooks = this.gotHttpService.getAllBooks();
    this.allBooks = this.gotHttpService.getAllBooks().subscribe(
      
      data => {
        console.log(data);
        this.allBooks = data;
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allBooks)

    //this.allCharacters = this.gotHttpService.getAllChars();
    this.allCharacters = this.gotHttpService.getAllChars().subscribe(
      
      data => {
        console.log(data);
        this.allCharacters = data;
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allCharacters)

    //this.allHouses = this.gotHttpService.getAllHouses();
    this.allHouses = this.gotHttpService.getAllHouses().subscribe(
      
      data => {
        console.log(data);
        this.allHouses = data;
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allHouses)

  }

 
}
