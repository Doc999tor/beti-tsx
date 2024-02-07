import { render, screen } from '@testing-library/react';
import { BooksList } from './BooksList';

const books = [{ id: 1, name: 'Book 1', author: 'Author 1' }, { id: 2, name: 'Book 2', author: 'Author 2' }];

describe('BooksList', () => {
  it('renders a list of books', () => {
    render(
      <BooksList books={ books } />
    );

    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
  });
});
