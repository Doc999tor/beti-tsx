import React, { ReactNode } from 'react';
import { BookStore } from '../books/BooksList/BooksList.store';
import { BooksModeStore } from '../books/ModeToggler/ModeToggler.store';

interface StoreProviderProps {
  stores: {
    bookStore: BookStore,
    booksModeStore: BooksModeStore,
  };
  children: ReactNode,
}

export const StoreContext = React.createContext<any>(null);

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, stores }) => (
  <StoreContext.Provider value={ stores }>{ children }</StoreContext.Provider>
);

export const useBookStore = () => React.useContext<StoreProviderProps['stores']>(StoreContext).bookStore;
export const useBookModeStore = () => React.useContext<StoreProviderProps['stores']>(StoreContext).booksModeStore;
