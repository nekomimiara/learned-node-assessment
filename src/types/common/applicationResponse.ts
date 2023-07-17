export class SuccessResponse <T> {
  constructor(data: T, status: string = 'success') {
    this.data = data;
    this.status = status;
  }
  status: string;
  data: T
}

export class ErrorResponse {
  constructor(error: string, status: string = 'error') {
    this.error = error;
    this.status = status;
  }
  status: string;
  error: string;
}