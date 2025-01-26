import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-book',
  standalone: false,

  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input()
  book: Book = {} as Book;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }
}
