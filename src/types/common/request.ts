export interface TypedRequest<T, U> extends Express.Request {
  params?: T;
  body?: U;
}