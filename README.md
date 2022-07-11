# BloggerAuth
Blogger auth to make {POST} requests

# What is this?

A blogger oauthplayground

# Installation

#### `npm i blogger_auth --save`

Then...

create an index.js file in the same folder where you have just install library.
define all params
```
const clientId = 'clientId.apps.googleusercontent.com'
const clientSecret = 'clientSecret'
const refreshToken = 'refreshToken'

var dataAuth = {
  clientId: clientId,
  clientSecret: clientSecret,
  refreshToken: refreshToken,
  bloggerId: 'bloggerId',
  postId: 'postId',
  replaceString: `last of last of last comment from api 11-07-2022` 
}
const auth = require("./blogger_auth")
 auth.send(dataAuth).then(resp =>{
  console.log('Post method resp: ', resp) 
})
```

## Test
#### `node index.js`
