export interface Success<T> {
  status: "success";
  data: T;
}

export const success = <T>(data: T): Success<T> => ({
  status: "success",
  data
});

export interface Failure {
  status: "failure";
  error: Error | string;
  data: null;
}

export const failure = (error: Error | string): Failure => ({
  status: "failure",
  error,
  data: null
});
