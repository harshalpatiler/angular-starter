import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = '/api/bookDetails';
  constructor(private _httpClient:HttpClient) { }
  getBooks(){
    this._httpClient.get('bookUrl');
  }
}
