export interface RequestOptions {
  headers?: Record<string, string>;
  queryParams?: Record<string, string>;
  urlParams?: Record<string, string>;
}

export interface Request<T extends RequestOptions = RequestOptions> {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  options?: T;
}
