export const SERVICE_UNAVAILABLE = 503;

export class HttpError extends Error {
    status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export class RetryableError extends HttpError {}
