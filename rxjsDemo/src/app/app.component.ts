import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjsDemo';
  allBooks: Book[];
  constructor(private _bookservice: BookService) { }

  getAllBooks() {
    this._bookservice.getBooks().subscribe(obj => this.allBooks = obj);
    }
ngOnInit(){
  this.getAllBooks();
}
}
