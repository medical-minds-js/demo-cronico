export class SuccessResponse {
  status: string;
  data: any;
  constructor(data) {
    this.status = 'success';
    this.data = data;
  }
}
