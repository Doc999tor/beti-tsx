import { render, screen, fireEvent } from '@testing-library/react';
import { BooksModeToggler } from './ModeToggler';
import { useBookModeStore } from '../../globalStore/StoreProvider';

jest.mock('../../globalStore/StoreProvider')

describe('BooksModeToggler', () => {
  it('renders the button with correct text', () => {
    (useBookModeStore as any).mockReturnValue({
      showPrivateBooks: false,
      toggleBooksMode: jest.fn(),
    });

    render(<BooksModeToggler />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Show Private Books');
  });

  it('calls toggleBooksMode when button is clicked', () => {
    const toggleBooksMode = jest.fn();
    (useBookModeStore as any).mockReturnValue({
      showPrivateBooks: false,
      toggleBooksMode,
    });

    render(<BooksModeToggler />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(toggleBooksMode).toHaveBeenCalledTimes(1);
  });
});
