export class ApplicationError extends Error {
  constructor(message: string, code: number) {
    super();
    this.message = message;
    this.code = code;
  }
  message: string;
  code: number;
}
