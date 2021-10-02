export class ErrorResponse extends Error{
    public StatusCode: Number | null | undefined;
    
    static Error(code: number, message: string){
        return new ErrorResponse(code, message)
    }

    constructor(code: Number | null, Message: string | null){
      super()
      this.message = Message || '';
      this.StatusCode = code || null;
    }
}

export function handleError (err: any, req: any, res: any, next: ()=>{}){
    if(err instanceof ErrorResponse){
        res.status(err.StatusCode).json({
            success: false,
            Error: {
                status: err.StatusCode,
                message: err.message,
            }
        })
    }else {
        res.status(500).json({
            success: false,
            Error: {
                status: 500,
                message: err.message,
                stack: [err.stack],
            }
        })
    }
}