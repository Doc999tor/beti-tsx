import React, { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useBookModeStore, useBookStore } from '../../globalStore/StoreProvider';
import { BooksList } from '../BooksList/BooksList';
import { BooksController } from './BooksListPage.ctrl';
import { BooksModeToggler } from '../ModeToggler/ModeToggler';

export const BookListPage: React.FC = observer(() => {
  const booksModeStore = useBookModeStore();

  const bookStore = useBookStore();
  const bookCtrl = useMemo(() => new BooksController(bookStore), [bookStore]);

  useEffect(() => {
    bookCtrl.fetchBooks({ isPrivate: booksModeStore.showPrivateBooks })
  }, [booksModeStore.showPrivateBooks, bookCtrl]);

  const booksList = <div>
    <h1>{booksModeStore.showPrivateBooks ? 'Private ' : ''} Books List ({ bookStore.books.length })</h1>
    <BooksModeToggler />

    <BooksList books={ bookStore.books } />
  </div>

  return (
    bookStore.error
      ? <div>Error: { bookStore.error.message }</div>
      : booksList
  );
});
