import React from 'react';
import { observer } from 'mobx-react';
import { useBookModeStore } from '../../globalStore/StoreProvider';

export const BooksModeToggler: React.FC = observer(() => {
  const booksModeStore = useBookModeStore();

  const handleToggleBooks = () => {
    booksModeStore.toggleBooksMode();
  };

  return (
    <button onClick={handleToggleBooks}>
      {booksModeStore.showPrivateBooks ? 'Show All Books' : 'Show Private Books'}
    </button>
  );
});
