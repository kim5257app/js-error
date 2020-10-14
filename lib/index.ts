export type ErrorInfo = {
  result: 'error' | 'failed',
  code: number,
  name: string,
  message: string,
}

export default class Error {
  public readonly result: 'error' | 'failed';

  public readonly code: number;

  public readonly name: string;

  public readonly message: string;

  public readonly prototype: { toString: () => string };

  constructor(errorInfo: ErrorInfo) {
    this.result = errorInfo.result;
    this.code = errorInfo.code;
    this.name = errorInfo.name;
    this.message = errorInfo.message;

    this.prototype = {
      toString: (): string => `[${this.result}](${this.code}) ${this.name}: ${this.message}`,
    };
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
      result: 'failed',
      name,
      message: (message != null) ? (message) : ('ERROR'),
      code: (code != null) ? (code) : (-1),
    });
  }

  static throwFail(name: string, message?: string, code?: number): void {
    throw new Error({
      result: 'failed',
      name,
      message: (message != null) ? (message) : ('ERROR'),
      code: (code != null) ? (code) : (-1),
    });
  }
}
