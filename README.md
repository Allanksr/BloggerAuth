# BloggerAuth
Blogger auth to make {POST} requests

# What is this?

A blogger oauthplayground

# Installation

#### Before install, you will must follow some steps...
create your OAuth client in google console
[console.cloud.google.com](https://console.cloud.google.com/apis/credentials)

##### after create you OAuth client, you will use your clientId and clientSecret to create your refreshToken through [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)

##### that's the scope will need `https://www.googleapis.com/auth/blogger`


<img width="300px" src="https://github.com/Allanksr/BloggerAuth/blob/main/console_print.JPG">
<img width="300px" src="https://github.com/Allanksr/BloggerAuth/blob/main/playground_config.JPG">

#### 

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
const auth = require("blogger_auth/blogger_auth")
 auth.send(dataAuth).then(resp =>{
  console.log('Post method resp: ', resp) 
})
```

## Test
#### `node index.js`
