import { BooksModeStore } from './ModeToggler.store';

describe('BooksModeStore', () => {
  let store: BooksModeStore;

  beforeEach(() => {
    store = new BooksModeStore();
  });

  it('initializes with showPrivateBooks as false', () => {
    expect(store.showPrivateBooks).toBe(false);
  });

  it('toggles showPrivateBooks', () => {
    store.toggleBooksMode();
    expect(store.showPrivateBooks).toBe(true);

    store.toggleBooksMode();
    expect(store.showPrivateBooks).toBe(false);
  });

  it('toggles showPrivateBooks multiple times', () => {
    store.toggleBooksMode();
    expect(store.showPrivateBooks).toBe(true);

    store.toggleBooksMode();
    expect(store.showPrivateBooks).toBe(false);

    store.toggleBooksMode();
    expect(store.showPrivateBooks).toBe(true);
  });
});
