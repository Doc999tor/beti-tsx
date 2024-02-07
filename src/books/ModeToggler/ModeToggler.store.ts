import { action, makeObservable, observable } from 'mobx';

export class BooksModeStore {
  @observable
  public showPrivateBooks = false;

  constructor() {
    makeObservable(this);
  }

  @action
  toggleBooksMode() {
    this.showPrivateBooks = !this.showPrivateBooks;
  }
}

export const booksModeStore = new BooksModeStore();
