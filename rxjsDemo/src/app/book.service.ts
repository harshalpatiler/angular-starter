import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = '/api/books';

  constructor(private _httpClient:HttpClient) { }

  getBooks(){
  return  this._httpClient.get<Book[]>(this.bookUrl);
 // return this._httpClient.get(this.bookUrl);
  }
}
