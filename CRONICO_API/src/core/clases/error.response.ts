export class ErrorResponse {
  status: string;
  message: string;
  constructor(message) {
    this.status = 'error';
    this.message = message;
  }
}
