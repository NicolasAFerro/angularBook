import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  standalone: false,

  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
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
}
