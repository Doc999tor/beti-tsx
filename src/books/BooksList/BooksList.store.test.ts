import { BookStore } from './BooksList.store';
import { BooksRepository } from '../helpers/BooksRepository';
import { BooksDataUtils } from '../helpers/BooksDataUtils';

const booksDTO = [{ id: 1, name: 'Book 1', author: 'Author 1' }, { id: 2, name: 'Book 2', author: 'Author 2' }];

jest.mock('../helpers/BooksRepository');

describe('BookStore', () => {
  let store: BookStore;

  beforeEach(() => {
    store = new BookStore();
  });

  it('fetches books', async () => {
    const mockBooksDTO = booksDTO;
    (BooksRepository.getBooks as any).mockResolvedValue(mockBooksDTO);

    await store.fetchBooks();

    expect(store.books).toEqual(BooksDataUtils.normalizeBooks(mockBooksDTO));
    expect(store.error).toBeNull();
  });

  it('fetches private books', async () => {
    const mockPrivateBooksDTO = booksDTO;
    (BooksRepository.getPrivateBooks as any).mockResolvedValue(mockPrivateBooksDTO);

    await store.fetchPrivateBooks();

    expect(store.books).toEqual(BooksDataUtils.normalizeBooks(mockPrivateBooksDTO));
    expect(store.error).toBeNull();
  });

  it('handles errors when fetching books', async () => {
    const mockError = new Error('Failed to fetch books');
    (BooksRepository.getBooks as any).mockRejectedValue(mockError);

    await store.fetchBooks();

    expect(store.books).toEqual([]);
    expect(store.error).toEqual(mockError);
  });

  it('handles errors when fetching private books', async () => {
    const mockError = new Error('Failed to fetch private books');
    (BooksRepository.getPrivateBooks as any).mockRejectedValue(mockError);

    await store.fetchPrivateBooks();

    expect(store.books).toEqual([]);
    expect(store.error).toEqual(mockError);
  });
});
