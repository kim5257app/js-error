export declare type ErrorInfo = {
    result: string;
    code: number;
    name: string;
    message: string;
};
export default class Error {
    errorInfo: ErrorInfo;
    constructor(errorInfo: ErrorInfo);
    static make(error: any): Error;
    static throwError(error: any): void;
    static makeFail(name: string, message?: string, code?: number): Error;
    static throwFail(name: string, message?: string, code?: number): void;
}
