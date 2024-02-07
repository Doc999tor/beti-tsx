import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './globalStore/StoreProvider';
import { BookListPage } from './books/BooksListPage/BooksListPage';

import { bookStore } from './books/BooksList/BooksList.store';
import { booksModeStore } from './books/ModeToggler/ModeToggler.store';

const stores = {
  bookStore,
  booksModeStore,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider stores={stores}>
      <BookListPage />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
