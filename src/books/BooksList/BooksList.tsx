import { FC } from 'react';
import { Book } from '../helpers/Book';

interface BookListProps {
  books: Book[];
}

export const BooksList: FC<BookListProps> = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={ book.id }>{ book.name }</li>
    ))}
  </ul>
);
