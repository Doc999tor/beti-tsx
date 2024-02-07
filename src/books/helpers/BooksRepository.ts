import { ApiGateway } from "../../Shared/ApiGateway";
import { Book } from "./Book";

export class BooksRepository {
  static async getBooks () {
    const booksDTO = await ApiGateway.get("/");
    return booksDTO;
  };

  static async getPrivateBooks () {
    const booksDTO = await ApiGateway.get("/private");
    return booksDTO;
  };

  static async addBook ({ name, author }: Omit<Book, "id">) {
    const bookAddDto = await ApiGateway.post("/books", { name, author });
    return bookAddDto && bookAddDto.ok ? true : false;
  };
}
