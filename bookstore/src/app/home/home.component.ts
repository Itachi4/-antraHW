import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BookDataService } from '../book-data.service';
import { CommonModule } from '@angular/common';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  searchTerm: string = ''; 
  books: Book[] = [];
  constructor(private bookDataService: BookDataService) {}

  ngOnInit() {
    this.loadDefaultBooks();
  }

  loadDefaultBooks() {
    this.bookDataService.getDefaultBooks().subscribe(books => {
      this.books = books;
    }, error => {
      console.error('Failed to load books:', error);
    });
  }

  search(bookName: string) {
    this.bookDataService.searchBooks(bookName).subscribe(books => {
      this.books = books;
    }, error => {
      console.error('Search failed:', error);
    });
  }

}
