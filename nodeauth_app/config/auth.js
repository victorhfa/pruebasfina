// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1182192321879952', // your App ID
        'clientSecret'  : '81a82886ff09ee7afc53464a5a3cf791', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'fEdh4UJmnUE9oYdaEqpaXoJKh',
        'consumerSecret'    : 'ARnx6Yag4IBHUjxeTSRynjPQJ6r49iRPoqootOUICT0ScGawft',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    }

};
