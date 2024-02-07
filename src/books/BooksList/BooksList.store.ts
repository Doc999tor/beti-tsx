import { observable, action, makeObservable, runInAction } from 'mobx';
import { Book } from '../helpers/Book';
import { BooksRepository } from '../helpers/BooksRepository';
import { BooksDataUtils } from '../helpers/BooksDataUtils';

export class BookStore {
  @observable
  public books: Book[] = [];

  @observable
  public privateBooks: Book[] = [];

  @observable
  public error: Error | null = null

  constructor() {
    makeObservable(this);
  }

  @action
  async fetchBooks() {
    try {
      const booksDTO = await BooksRepository.getBooks();
      runInAction(() => {
        this.books = BooksDataUtils.normalizeBooks(booksDTO);
        this.error = null;
      })
    } catch (error) {
      runInAction(() => {
        this.error = error as Error;
      })
    }
  }

  @action
  async fetchPrivateBooks() {
    try {
      const booksDTO = await BooksRepository.getPrivateBooks();
      runInAction(() => {
        this.books = BooksDataUtils.normalizeBooks(booksDTO);
        this.error = null;
      })
    } catch (error) {
      runInAction(() => {
        this.error = error as Error;
      })
    }
  }
}

export const bookStore = new BookStore();
