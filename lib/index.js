"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.ErrorResponse = void 0;
class ErrorResponse extends Error {
    constructor(code, Message) {
        super();
        this.message = Message || '';
        this.StatusCode = code || null;
    }
    static Error(code, message) {
        return new ErrorResponse(code, message);
    }
}
exports.ErrorResponse = ErrorResponse;
function handleError(err, req, res, next) {
    if (err instanceof ErrorResponse) {
        res.status(err.StatusCode).json({
            success: false,
            Error: {
                status: err.StatusCode,
                message: err.message,
            }
        });
    }
    else {
        res.status(500).json({
            success: false,
            Error: {
                status: 500,
                message: err.message,
                stack: [err.stack],
            }
        });
    }
}
exports.handleError = handleError;
//# sourceMappingURL=index.js.map