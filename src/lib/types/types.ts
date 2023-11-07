export type APIError = {
  message: string;
  extraInfo?: string;
};

export type APIResponse<T> = {
  body?: T;
  error?: APIError;
};

export class CustomError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public extraInfo?: string
  ) {
    super(message);
  }
}
