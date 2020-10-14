"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error {
    constructor(errorInfo) {
        this.result = errorInfo.result;
        this.code = errorInfo.code;
        this.name = errorInfo.name;
        this.message = errorInfo.message;
        this.prototype = {
            toString: () => `[${this.result}](${this.code}) ${this.name}: ${this.message}`,
        };
    }
    static make(error) {
        return new Error({
            result: 'error',
            code: (error.code != null) ? (error.code) : (-1),
            name: (error.name != null) ? (error.name) : ('ERROR'),
            message: (error.message != null) ? (error.message) : ('ERROR'),
        });
    }
    static throwError(error) {
        throw new Error({
            result: 'error',
            code: (error.code != null) ? (error.code) : (-1),
            name: (error.name != null) ? (error.name) : ('ERROR'),
            message: (error.message != null) ? (error.message) : ('ERROR'),
        });
    }
    static makeFail(name, message, code) {
        return new Error({
            result: 'failed',
            name,
            message: (message != null) ? (message) : ('ERROR'),
            code: (code != null) ? (code) : (-1),
        });
    }
    static throwFail(name, message, code) {
        throw new Error({
            result: 'failed',
            name,
            message: (message != null) ? (message) : ('ERROR'),
            code: (code != null) ? (code) : (-1),
        });
    }
}
exports.default = Error;
