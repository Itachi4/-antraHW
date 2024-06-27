import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './models/book.model';

interface ApiResponse {
  items: Book[];
}

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  private filterBooks(books: Book[]): Book[] {
    return books.filter(book => 
      book.volumeInfo.imageLinks?.thumbnail &&
      book.volumeInfo.title &&
      book.volumeInfo.publisher &&
      book.volumeInfo.publishedDate &&
      book.volumeInfo.description
    );
}


  searchBooks(bookName: string): Observable<Book[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}${encodeURIComponent(bookName)}`).pipe(
      map(res => this.filterBooks(res.items || []))
    );
  }

  getDefaultBooks(): Observable<Book[]> {
    const defaults = 'Testing';
    return this.searchBooks(defaults);
  }
}
