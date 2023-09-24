import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Request, RequestOptions} from './types';
import {BaseURL} from '../../constants/enums';

const api: AxiosInstance = axios.create({
  baseURL: BaseURL,
});

export const makeRequest = async <TResponse>(
  request: Request<RequestOptions & {data?: TResponse}>,
): Promise<AxiosResponse<TResponse>> => {
  const urlWithParams = request.url.replace(/:(\w+)/g, (_, param) => {
    return (
      (request.options?.urlParams && request.options.urlParams[param]) || ''
    );
  });

  const queryString = Object.entries(request.options?.queryParams || {})
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');

  const finalUrl = `${urlWithParams}${queryString ? `?${queryString}` : ''}`;

  const axiosRequestConfig: AxiosRequestConfig = {
    url: finalUrl,
    method: request.method,
    headers: request.options?.headers,
    data: request.data,
  };

  try {
    const response: AxiosResponse<TResponse> = await api.request<TResponse>(
      axiosRequestConfig,
    );
    return response;
  } catch (error: any) {
    // Handle error here
    if (error.response) {
      // An HTTP error occurred, but the response was received
      return error.response;
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject(error.request);
    } else {
      // Something happened in setting up the request
      return Promise.reject(error.message);
    }
  }
};
