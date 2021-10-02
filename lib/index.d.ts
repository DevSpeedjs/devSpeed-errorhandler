export declare class ErrorResponse extends Error {
    StatusCode: Number | null | undefined;
    static Error(code: number, message: string): ErrorResponse;
    constructor(code: Number | null, Message: string | null);
}
export declare function handleError(err: any, req: any, res: any, next: () => {}): void;
//# sourceMappingURL=index.d.ts.map