export type ErrorInfo = {
  result: string,
  code: number,
  name: string,
  message: string,
}

export default class Error {
  errorInfo: ErrorInfo;

  constructor(errorInfo: ErrorInfo) {
    this.errorInfo = errorInfo;
  }

  static make(error: any): Error {
    return new Error({
      result: 'error',
      code: (error.code != null) ? (error.code) : (-1),
      name: (error.name != null) ? (error.name) : ('ERROR'),
      message: (error.message != null) ? (error.message) : ('ERROR'),
    });
  }

  static throwError(error: any): void {
    throw new Error({
      result: 'error',
      code: (error.code != null) ? (error.code) : (-1),
      name: (error.name != null) ? (error.name) : ('ERROR'),
      message: (error.message != null) ? (error.message) : ('ERROR'),
    });
  }

  static makeFail(name: string, message?: string, code?: number): Error {
    return new Error({
      result: 'fail',
      code: (code != null) ? (code) : (-1),
      name: (name != null) ? (name) : ('ERROR'),
      message: (message != null) ? (message) : ('ERROR'),
    });
  }

  static throwFail(name: string, message?: string, code?: number): void {
    throw new Error({
      result: 'fail',
      code: (code != null) ? (code) : (-1),
      name: (name != null) ? (name) : ('ERROR'),
      message: (message != null) ? (message) : ('ERROR'),
    });
  }
}
