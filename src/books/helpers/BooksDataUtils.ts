import { Book } from "./Book";

export class BooksDataUtils {
  static normalizeBooks(books: Book[]) {
    const uniqueBooksIds = new Set<number>();
    const normalizedBooks: Book[] = [];
    books.forEach(book => {
      if (book.id && !uniqueBooksIds.has(book.id)) {
        uniqueBooksIds.add(book.id);
        normalizedBooks.push(book);
      }
    });
    return normalizedBooks;
  }
}
