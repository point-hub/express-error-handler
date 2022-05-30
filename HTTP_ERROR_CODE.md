# Client-Side Errors

## 400 Bad Request
The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing)

## 401 Unauthorized
This status code means you haven’t yet authenticated against the API. The API doesn’t know who you are and so it won’t serve you.

For most APIs you need to sign up and get an API key. This key is then used inside an HTTP header field when you send a request, telling the API who you are.

## 403 Forbidden
The forbidden status indicates that you don’t have permission to request that URL. The difference to the Unauthorized status is that you’re authenticated, but the user or role you’re authenticated for isn’t permitted to make the request.

## 404 Not Found
This is by far the most common error code you can get. It indicates that the URL you used in your request doesn’t exist on the server.

## 405 Method Not Allowed
A request method is not supported for the requested resource; for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.

## 422 Unprocessable Entity
The request was well-formed but was unable to be followed due to semantic errors

## 429 Too Many Requests
Most API subscription plans have limits — the cheaper the plan, the fewer requests per second are allowed for your API key.

If you’re sending too many requests in a short amount of time, consider throttling them in your client. This status can also indicate that you hit a daily, weekly, or monthly limit on your account.

# Server-Side Errors

## 500 Internal Server Error
This status can mean anything really, but it usually indicates the API server crashed. It could have been caused by something request-related.

Double-check the docs to make sure you did everything right: query fields, body fields, headers, format, etc. If that didn’t fix the problem, it might also have been related to an API update that introduced buggy code, or data the API loaded from an upstream service.

