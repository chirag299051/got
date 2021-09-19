import { Injectable } from '@angular/core';

@Injectable()
export class GotService {

  public currentBook;

  public getAllBooks():any{
    
    return this.allBooks;

  }

  public getSingleBookInfo(currentBookName): any {
    for(let book of this.allBooks){
      if(book.name == currentBookName){
        this.currentBook = book;
      }
    }
    console.log(this.currentBook)
    return this.currentBook;
  }

  public currentChar;

  public getAllChars():any{
    
    return this.allCharacters;

  }

  public getSingleCharInfo(currentCharUrl): any {
    for(let char of this.allCharacters){
      if(char.url == currentCharUrl){
        this.currentChar = char;
      }
    }
    console.log(this.currentChar)
    return this.currentChar;
  }

  public currentHouse;

  public getAllHouses():any{
    
    return this.allHouses;

  }


  public getSingleHouseInfo(currentHouseName): any {
    for(let house of this.allHouses){
      if(house.name == currentHouseName){
        this.currentHouse = house;
      }
    }
    console.log(this.currentHouse)
    return this.currentHouse;
  }

  constructor() { 
    console.log("service constructor was called")
  }

  public allHouses = [
    {
      "url": "https://anapioficeandfire.com/api/houses/1",
      "name": "House Algood",
      "region": "The Westerlands",
      "coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
      "words": "",
      "titles": [
        ""
      ],
      "seats": [
        ""
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/229",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": []
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/2",
      "name": "House Allyrion of Godsgrace",
      "region": "Dorne",
      "coatOfArms": "Gyronny Gules and Sable, a hand couped Or",
      "words": "No Foe May Pass",
      "titles": [
        ""
      ],
      "seats": [
        "Godsgrace"
      ],
      "currentLord": "https://anapioficeandfire.com/api/characters/298",
      "heir": "https://anapioficeandfire.com/api/characters/1922",
      "overlord": "https://anapioficeandfire.com/api/houses/285",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": [
        "https://anapioficeandfire.com/api/characters/298",
        "https://anapioficeandfire.com/api/characters/1129",
        "https://anapioficeandfire.com/api/characters/1301",
        "https://anapioficeandfire.com/api/characters/1922"
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/3",
      "name": "House Amber",
      "region": "The North",
      "coatOfArms": "",
      "words": "",
      "titles": [
        ""
      ],
      "seats": [
        ""
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": []
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/4",
      "name": "House Ambrose",
      "region": "The Reach",
      "coatOfArms": "Or, semy of ants gules",
      "words": "Never Resting",
      "titles": [
        ""
      ],
      "seats": [
        ""
      ],
      "currentLord": "https://anapioficeandfire.com/api/characters/141",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/398",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": [
        "https://anapioficeandfire.com/api/characters/82",
        "https://anapioficeandfire.com/api/characters/102",
        "https://anapioficeandfire.com/api/characters/141",
        "https://anapioficeandfire.com/api/characters/152",
        "https://anapioficeandfire.com/api/characters/344"
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/5",
      "name": "House Appleton of Appleton",
      "region": "The Reach",
      "coatOfArms": "Or, an apple tree eradicated proper fructed gules, quartered with argent, a gatehouse cendrée",
      "words": "",
      "titles": [
        ""
      ],
      "seats": [
        "Appleton"
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/398",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": []
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/6",
      "name": "House Arryn of Gulltown",
      "region": "The Vale",
      "coatOfArms": "",
      "words": "",
      "titles": [
        ""
      ],
      "seats": [
        "Gulltown"
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/7",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": []
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/7",
      "name": "House Arryn of the Eyrie",
      "region": "The Vale",
      "coatOfArms": "A sky-blue falcon soaring against a white moon, on a sky-blue field(Bleu celeste, upon a plate a falcon volant of the field)",
      "words": "As High as Honor",
      "titles": [
        "King of Mountain and Vale (formerly)",
        "Lord of the Eyrie",
        "Defender of the Vale",
        "Warden of the East"
      ],
      "seats": [
        "The Eyrie (summer)",
        "Gates of the Moon (winter)"
      ],
      "currentLord": "https://anapioficeandfire.com/api/characters/894",
      "heir": "https://anapioficeandfire.com/api/characters/477",
      "overlord": "https://anapioficeandfire.com/api/houses/16",
      "founded": "Coming of the Andals",
      "founder": "https://anapioficeandfire.com/api/characters/144",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [
        "https://anapioficeandfire.com/api/houses/6"
      ],
      "swornMembers": [
        "https://anapioficeandfire.com/api/characters/49",
        "https://anapioficeandfire.com/api/characters/92",
        "https://anapioficeandfire.com/api/characters/93",
        "https://anapioficeandfire.com/api/characters/107",
        "https://anapioficeandfire.com/api/characters/223",
        "https://anapioficeandfire.com/api/characters/265",
        "https://anapioficeandfire.com/api/characters/300",
        "https://anapioficeandfire.com/api/characters/356",
        "https://anapioficeandfire.com/api/characters/477",
        "https://anapioficeandfire.com/api/characters/508",
        "https://anapioficeandfire.com/api/characters/540",
        "https://anapioficeandfire.com/api/characters/548",
        "https://anapioficeandfire.com/api/characters/558",
        "https://anapioficeandfire.com/api/characters/572",
        "https://anapioficeandfire.com/api/characters/688",
        "https://anapioficeandfire.com/api/characters/894",
        "https://anapioficeandfire.com/api/characters/1068",
        "https://anapioficeandfire.com/api/characters/1193",
        "https://anapioficeandfire.com/api/characters/1280",
        "https://anapioficeandfire.com/api/characters/1443",
        "https://anapioficeandfire.com/api/characters/1655",
        "https://anapioficeandfire.com/api/characters/1693",
        "https://anapioficeandfire.com/api/characters/1715",
        "https://anapioficeandfire.com/api/characters/1884"
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/8",
      "name": "House Ashford of Ashford",
      "region": "The Reach",
      "coatOfArms": "Tenny, a sun in splendour beneath a chevron inverted argent",
      "words": "Our Sun Shines Bright",
      "titles": [
        "Lord of Ashford"
      ],
      "seats": [
        "Ashford"
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/398",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": [
        "https://anapioficeandfire.com/api/characters/121",
        "https://anapioficeandfire.com/api/characters/641",
        "https://anapioficeandfire.com/api/characters/895",
        "https://anapioficeandfire.com/api/characters/1812"
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/9",
      "name": "House Ashwood",
      "region": "The North",
      "coatOfArms": "",
      "words": "",
      "titles": [
        ""
      ],
      "seats": [
        ""
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/34",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": []
    },
    {
      "url": "https://anapioficeandfire.com/api/houses/10",
      "name": "House Baelish of Harrenhal",
      "region": "The Riverlands",
      "coatOfArms": "A field of silver mockingbirds, on a green field(Vert, semé of mockingbirds argent)",
      "words": "",
      "titles": [
        "Lord Paramount of the Trident",
        "Lord of Harrenhal"
      ],
      "seats": [
        "Harrenhal"
      ],
      "currentLord": "https://anapioficeandfire.com/api/characters/823",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/16",
      "founded": "299 AC",
      "founder": "https://anapioficeandfire.com/api/characters/823",
      "diedOut": "",
      "ancestralWeapons": [
        ""
      ],
      "cadetBranches": [],
      "swornMembers": [
        "https://anapioficeandfire.com/api/characters/651",
        "https://anapioficeandfire.com/api/characters/804",
        "https://anapioficeandfire.com/api/characters/823",
        "https://anapioficeandfire.com/api/characters/957",
        "https://anapioficeandfire.com/api/characters/970"
      ]
    }
  ]

  public allCharacters = [
    {
      "url": "https://anapioficeandfire.com/api/characters/1",
      "name": "",
      "gender": "Female",
      "culture": "Braavosi",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "The Daughter of the Dusk"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [],
      "books": [
        "https://anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/2",
      "name": "Walder",
      "gender": "Male",
      "culture": "",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "Hodor"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://anapioficeandfire.com/api/houses/362"
      ],
      "books": [
        "https://anapioficeandfire.com/api/books/1",
        "https://anapioficeandfire.com/api/books/2",
        "https://anapioficeandfire.com/api/books/3",
        "https://anapioficeandfire.com/api/books/5",
        "https://anapioficeandfire.com/api/books/8"
      ],
      "povBooks": [],
      "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 6"
      ],
      "playedBy": [
        "Kristian Nairn"
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/3",
      "name": "",
      "gender": "Male",
      "culture": "",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "Lamprey"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://anapioficeandfire.com/api/houses/15"
      ],
      "books": [
        "https://anapioficeandfire.com/api/books/3"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/4",
      "name": "",
      "gender": "Female",
      "culture": "Braavosi",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "The Merling Queen"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [],
      "books": [
        "https://anapioficeandfire.com/api/books/5",
        "https://anapioficeandfire.com/api/books/8"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/5",
      "name": "",
      "gender": "Male",
      "culture": "",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "Old Crackbones"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [],
      "books": [
        "https://anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/6",
      "name": "",
      "gender": "Female",
      "culture": "Braavosi",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "The Poetess"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [],
      "books": [
        "https://anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/7",
      "name": "",
      "gender": "Female",
      "culture": "",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "Porridge"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://anapioficeandfire.com/api/houses/15"
      ],
      "books": [
        "https://anapioficeandfire.com/api/books/3"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/8",
      "name": "",
      "gender": "Male",
      "culture": "",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "Quickfinger"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://anapioficeandfire.com/api/houses/23"
      ],
      "books": [
        "https://anapioficeandfire.com/api/books/6"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/9",
      "name": "",
      "gender": "Female",
      "culture": "",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "the Sailor's Wife"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [],
      "books": [
        "https://anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    },
    {
      "url": "https://anapioficeandfire.com/api/characters/10",
      "name": "",
      "gender": "Female",
      "culture": "Braavosi",
      "born": "",
      "died": "",
      "titles": [
        ""
      ],
      "aliases": [
        "The Veiled Lady"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [],
      "books": [
        "https://anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [],
      "tvSeries": [
        ""
      ],
      "playedBy": [
        ""
      ]
    }
  ]

  public allBooks = [
    {
      "url": "https://anapioficeandfire.com/api/books/1",
      "name": "A Game of Thrones",
      "isbn": "978-0553103540",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 694,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "1996-08-01T00:00:00",
      "characters": []
        
    },
    {
      "url": "https://anapioficeandfire.com/api/books/2",
      "name": "A Clash of Kings",
      "isbn": "978-0553108033",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 768,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardback",
      "released": "1999-02-02T00:00:00",
      "characters": []
    },
    {
      "url": "https://anapioficeandfire.com/api/books/3",
      "name": "A Storm of Swords",
      "isbn": "978-0553106633",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 992,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "2000-10-31T00:00:00",
      "characters": []
        
    },
    {
      "url": "https://anapioficeandfire.com/api/books/4",
      "name": "The Hedge Knight",
      "isbn": "978-0976401100",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 164,
      "publisher": "Dabel Brothers Publishing",
      "country": "United States",
      "mediaType": "GraphicNovel",
      "released": "2005-03-09T00:00:00",
      "characters": []
        
    },
    {
      "url": "https://anapioficeandfire.com/api/books/5",
      "name": "A Feast for Crows",
      "isbn": "978-0553801507",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 784,
      "publisher": "Bantam Books",
      "country": "United Status",
      "mediaType": "Hardcover",
      "released": "2005-11-08T00:00:00",
      "characters": []
        
    },
    {
      "url": "https://anapioficeandfire.com/api/books/6",
      "name": "The Sworn Sword",
      "isbn": "978-0785126508",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 152,
      "publisher": "Marvel",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "2008-06-18T00:00:00",
      "characters": []
        
    },
    {
      "url": "https://anapioficeandfire.com/api/books/7",
      "name": "The Mystery Knight",
      "isbn": "978-0765360267",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 416,
      "publisher": "Tor Fantasy",
      "country": "United States",
      "mediaType": "Paperback",
      "released": "2011-03-29T00:00:00",
      "characters": []
        
    },
    {
      "url": "https://anapioficeandfire.com/api/books/8",
      "name": "A Dance with Dragons",
      "isbn": "978-0553801477",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 1040,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "2011-07-12T00:00:00",
      "characters": []
        
    },
    {
      "url": "https://anapioficeandfire.com/api/books/9",
      "name": "The Princess and the Queen",
      "isbn": "978-0765332066",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 784,
      "publisher": "Tor Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "2013-12-03T00:00:00",
      "characters": []
        
    },
    {
      "url": "https://anapioficeandfire.com/api/books/10",
      "name": "The Rogue Prince",
      "isbn": "978-0345537263",
      "authors": [
        "George R. R. Martin"
      ],
      "numberOfPages": 832,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "2014-06-17T00:00:00",
      "characters": []
        
    }
  ]

}
