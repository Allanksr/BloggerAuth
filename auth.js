
const { google } = require('googleapis')
const axios = require('axios')
const redirectUri = 'https://developers.google.com/oauthplayground'

async function endRequest(data){
  try {
    return data.status 
  } catch (error) {
    return error 
  }
}

async function send(dataAuth){     
    var oAuth2Client = new google.auth.OAuth2(dataAuth.clientId, dataAuth.clientSecret, redirectUri)
    oAuth2Client.setCredentials({refresh_token : dataAuth.refreshToken})
    var accessToken = oAuth2Client.getAccessToken()
    var endPoint = `https://www.blogger.com/feeds/${dataAuth.bloggerId}/${dataAuth.postId}/comments/default`

    var requestBody = "<entry xmlns='http://www.w3.org/2005/Atom'>\n" +
                         `<content type=\"html\">${dataAuth.replaceString}</content>\n` +
                      "</entry>"

      let axiosConfiguration = {
        headers: {
            'Content-Type': 'application/atom+xml',
            'Authorization': `Bearer ${(await accessToken).token}`
        }
      }
            
     return axios.post(endPoint, requestBody, axiosConfiguration)
        .then((res) =>  endRequest(res))
        .catch((err) =>  endRequest(err))
}

module.exports = {send}
