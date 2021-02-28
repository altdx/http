export type HTTP_METHOD_TYPES =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export type HTTP_HEADERS_TYPES = string | null

export interface IRequest {
  getMethod(): HTTP_METHOD_TYPES;
  getHost(): HTTP_HEADERS_TYPES;
  getUserAgent(): HTTP_HEADERS_TYPES;
  getAccept(): HTTP_HEADERS_TYPES;
  getAcceptLanguage(): HTTP_HEADERS_TYPES;
  getAcceptEncoding(): HTTP_HEADERS_TYPES;
  getConnection(): HTTP_HEADERS_TYPES;
  getCookie(): HTTP_HEADERS_TYPES;
  getUpgradeInsecureRequest(): HTTP_HEADERS_TYPES;
}