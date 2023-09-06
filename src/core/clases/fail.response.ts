export class FailResponse {
  status: string;
  data: string;
  constructor(data: string) {
    this.status = 'fail';
    this.data = data;
  }
}
