# Admin CMS for our Fewa-Store

If passing dotenv variable in React, then use `REACT_APP_` prefix in variable name.

## Authorization process

1. User logs in with username and password
2. send login data to the login api
3. if login success, create JWTs

| `accessJWT`                                                                                                                                                                                                                                       | `refreshJWT`                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| store in session Table                                                                                                                                                                                                                            | store in cookie or user table                                                                                                                             |
| going to create for short period of time as backend server is stateless, it doesn't care where the request is coming from as long as accessJWT is valid and some hackers can access access accessjwt and access pc so we create it for short time | store in browser and everytime our access token expires, tell frontend system to create or request new access jwt from server with the help of refreshJWT |
| accessJWT is used to access protected resources                                                                                                                                                                                                   | refreshJWT is used to create new accessJWT                                                                                                                |

5. return tokens to the frontend
6. store tokens in the local storage or browser sessions
   a. accessJWT in the session storage
   b. refreshJWT in the local storage

Q. What is sessionStorage?
A. The sessionStorage property allows you to access a session Storage object for the current origin. sessionStorage is similar to localStorage, except that while data stored in localStorage has no expiration set, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed or on reloading page to another tab.

Q. What is localStorage?
A. The localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. Data stored in localStorage remains forever in browser sessions, it's like storing data in ROM or hard-drive.

Q. What is JWT?
A. JSON Web Token is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

In simple terms, JWT is some piece of text or string that is used for authorizing user in the backend.

The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

### Authorization process - protect server

- receive accessJWT as a authorization header
- verify if accessJWT is valid
- verify if accessJWT exist in session table
- then, get the user info by email which is available through the jwt decode
- do next()
- if any of the steps fail above, return unauthorization error message.

### Frontend auto login

- case 1: when you're refreshing the same window
- case 2: when you open link to a new tab or come back and revisit the site

#### Case 1: when you're refreshing the same window

- check if accessJWT exist, fetch user and mount user in our redux store
- if refreshJWT exist, fetch new accessJWT and fetch user using the newly fetch accessJWT

# multer

Multer is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files.
Multer will not process any form which is not multipart ( multipart/form-data ).
