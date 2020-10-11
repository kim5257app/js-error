"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error {
    constructor(errorInfo) {
        this.errorInfo = errorInfo;
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
            result: 'fail',
            code: (code != null) ? (code) : (-1),
            name: (name != null) ? (name) : ('ERROR'),
            message: (message != null) ? (message) : ('ERROR'),
        });
    }
    static throwFail(name, message, code) {
        throw new Error({
            result: 'fail',
            code: (code != null) ? (code) : (-1),
            name: (name != null) ? (name) : ('ERROR'),
            message: (message != null) ? (message) : ('ERROR'),
        });
    }
}
exports.default = Error;
