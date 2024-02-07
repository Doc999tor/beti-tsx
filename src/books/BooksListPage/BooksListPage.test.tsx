import { render, screen } from '@testing-library/react';
import { BookListPage } from './BooksListPage';
import { BooksModeStore } from '../ModeToggler/ModeToggler.store';
import { BookStore } from '../BooksList/BooksList.store';
import { StoreProvider } from '../../globalStore/StoreProvider';

const books = [{ id: 1, name: 'Book 1', author: 'Author 1' }, { id: 2, name: 'Book 2', author: 'Author 2' }];

describe('BookListPage', () => {
  it('renders private books list', async () => {
    const booksModeStore = new BooksModeStore();
    const bookStore = new BookStore();

    jest.spyOn(bookStore, 'fetchPrivateBooks').mockResolvedValueOnce(books as any);

    bookStore.books = books;
    booksModeStore.toggleBooksMode();

    render(
      <StoreProvider stores={{ bookStore, booksModeStore }}>
        <BookListPage />
      </StoreProvider>
    );

    expect(screen.getByText('Private Books List (2)')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
  });

  it('renders public books list', () => {
    const booksModeStore = new BooksModeStore();
    const bookStore = new BookStore();

    jest.spyOn(bookStore, 'fetchBooks').mockResolvedValueOnce(books as any);
    bookStore.books = books;

    render(
      <StoreProvider stores={{ bookStore, booksModeStore }}>
        <BookListPage />
      </StoreProvider>
    );

    expect(screen.getByText('Books List (2)')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const booksModeStore = new BooksModeStore();
    const bookStore = new BookStore();

    bookStore.error = new Error('Failed to fetch books');

    render(
      <StoreProvider stores={{ bookStore, booksModeStore }}>
        <BookListPage />
      </StoreProvider>
    );

    expect(screen.getByText('Error: Failed to fetch books')).toBeInTheDocument();
  });
});
