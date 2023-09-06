export interface ApiListResponse<t> {
  status: string;
  data: ListResponse<t> | string;
  message?: string;
}

export interface ListResponse<t> {
  items: t[];
  results: number;
  total: number;
}

export interface ApiDataResponse<t> {
  status: string;
  data: t | string;
  message?: string;
}

export interface ApiGeneralResponse {
  status: string;
  data: string;
  message?: string;
}
