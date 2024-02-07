import { BookStore } from "../BooksList/BooksList.store";

export class BooksController {
  constructor(private store: BookStore) {}

  async fetchBooks({ isPrivate } = { isPrivate: false }) {
    const booksDTO = isPrivate
    ? await this.store.fetchPrivateBooks()
    : await this.store.fetchBooks();
    return booksDTO;
  }
}
