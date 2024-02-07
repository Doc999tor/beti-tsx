import { Book } from "../books/helpers/Book";
import { HttpError, RetryableError, SERVICE_UNAVAILABLE } from "./HttpError";
import { API_BASE } from "./config";

export class ApiGateway {
  static async get (path: string) {
    try {
      const response = await fetch(`${API_BASE}${path}`); // can be replaced with more advanced ky or got library
      if (response.status === SERVICE_UNAVAILABLE) {
        throw new RetryableError("Service Unavailable", SERVICE_UNAVAILABLE); // can be enhanced with some exponential backoff retry logic or/and RETRY-AFTER header
      }
      const dto = response.json();
      return dto;
    } catch (error) {
      throw new HttpError((error as Error).message, 500);
    }
  };
  static async post (path: string, payload: Omit<Book, 'id'>) {
    const response = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const dto = response.json();
    return dto;
  };
}
