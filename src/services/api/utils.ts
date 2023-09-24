import {Request, RequestOptions} from './types';
function createRequest<TResponse>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  requestData?: unknown,
  queryParams?: Record<string, string>,
  token?: string | null,
  urlParams?: Record<string, string>,
): Request<RequestOptions & {data?: TResponse}> {
  const headers: Record<string, string> = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return {
    url,
    method,
    data: requestData,
    options: {
      queryParams,
      headers,
      urlParams,
    },
  };
}

export function createGetRequest<TResponse>(
  url: string,
  queryParams?: Record<string, string>,
  token?: string | null,
  urlParams?: Record<string, string>,
): Request<RequestOptions & {data?: TResponse}> {
  const config = createRequest<TResponse>(
    url,
    'GET',
    undefined,
    queryParams,
    token,
    urlParams,
  );

  return config;
}

export function createPostRequest<TRequest, TResponse>(
  url: string,
  requestData: TRequest,
  queryParams?: Record<string, string>,
  token?: string | null,
  urlParams?: Record<string, string>,
): Request<RequestOptions & {data?: TResponse}> {
  const config = createRequest<TResponse>(
    url,
    'POST',
    requestData,
    queryParams,
    token,
    urlParams,
  );

  return config;
}

export function createPutRequest<TRequest, TResponse>(
  url: string,
  requestData: TRequest,
  queryParams?: Record<string, string>,
  token?: string | null,
  urlParams?: Record<string, string>,
): Request<RequestOptions & {data?: TResponse}> {
  const config = createRequest<TResponse>(
    url,
    'PUT',
    requestData,
    queryParams,
    token,
    urlParams,
  );

  return config;
}

export function createDeleteRequest<TResponse>(
  url: string,
  queryParams?: Record<string, string>,
  token?: string | null,
  urlParams?: Record<string, string>,
): Request<RequestOptions & {data?: TResponse}> {
  const config = createRequest<TResponse>(
    url,
    'DELETE',
    undefined,
    queryParams,
    token,
    urlParams,
  );
  return config;
}
