import {
  ApiDataResponse,
  ApiListResponse,
  ListResponse,
} from '@core/interfaces/http.interfaces';

export function listValue<T>(
  data: ApiListResponse<T>,
  defaultValue?: any
): ListResponse<T> {
  if (data.status === 'success' && typeof data.data !== 'string') {
    return data.data;
  }
  return defaultValue || null;
}

export function itemsValue<T>(
  data: ApiListResponse<T>,
  defaultValue?: T[]
): T[] {
  if (data.status === 'success' && typeof data.data !== 'string') {
    return data.data.items;
  }
  return defaultValue || [];
}

export function dataValue<T>(data: ApiDataResponse<T>, defaultValue?: any): T {
  if (data.status === 'success' && typeof data.data !== 'string') {
    return data.data;
  }
  return defaultValue || null;
}
