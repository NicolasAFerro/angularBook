import { Component } from '@angular/core';
import { Book } from '../../Book';
import { Console } from 'console';

@Component({
  selector: 'app-books',
  standalone: false,

  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  book: Book = {} as Book;
  isUpdate: boolean = false;
  idCount: number = 5;
  books: Book[] = [
    {
      id: 1,
      title: 'titulo 1',
      author: 'autor 1',
      price: 500.0,
    },
    {
      id: 2,
      title: 'titulo 2',
      author: 'autor 2',
      price: 502.0,
    },
    {
      id: 3,
      title: 'titulo 3',
      author: 'autor 3',
      price: 503.0,
    },
  ];

  saveBook() {
    if (!this.isUpdate) {
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }
    this.book = {} as Book; //zera a variavel
    this.isUpdate = false;
  }

  //Aqui só passa pelo filtro se for diferente
  //o objeto b é diferente de removeBook? True, passa no filtro;
  //caso contrario, bloqueia
  deleteBook(removeBook: Book) {
    this.books = this.books.filter((b) => b !== removeBook);
  }

  updateBook(selectedBook: Book) {
    this.book = selectedBook;
    this.isUpdate = true;
  }
}
