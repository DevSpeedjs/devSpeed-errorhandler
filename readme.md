
@devspeed/errorhandler is an Express Error handler that allows you to handle errors easer.  `handleError()` and the `ErrorResponse()`  class

let start with the `handleError()` function 

`handleError() ` is a middleware and should be your last middleware for it to work. `handleError()` catch errors and send a json response  that looks like this

```json
{
  "success": false,
  "Error": {
     "status": 500,
     "message": "internal error",
  }
}
```
>  `handleError` should  be your last  middleware

```js
const express = require('express')
const app = express()
const {ErrorResponse, handleError} = require('@devspeed/errorhandler')

app.use(handleError)

app.listen(3000)

```

the `ErrorResponse()` class allow you to create custom errors  using the `next` method  which than Gets catch by the `handleError()` function


## Example

```js
app.get('/api/test', (req, res, next)=>{
    next(new ErrorResponse(404, 'not found')) 
    /* 
    or 
    next(ErrorResponse.Error(404, 'not found'))
    */
})
```
the response look like this

```json
{
  "success": false,
  "Error": {
     "status": 404, 
     "message": 'not found'
  }
}
```