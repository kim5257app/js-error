export declare type ErrorInfo = {
    result: 'error' | 'failed';
    code: number;
    name: string;
    message: string;
};
export default class Error {
    readonly result: 'error' | 'failed';
    readonly code: number;
    readonly name: string;
    readonly message: string;
    readonly prototype: {
        toString: () => string;
    };
    constructor(errorInfo: ErrorInfo);
    static make(error: any): Error;
    static throwError(error: any): void;
    static makeFail(name: string, message?: string, code?: number): Error;
    static throwFail(name: string, message?: string, code?: number): void;
}
