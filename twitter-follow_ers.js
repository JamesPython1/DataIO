const  TwitterClient = require('easy-twitter');
var fs = require('file-system');
const twitter = new TwitterClient({
  consumer_key: 'your-consumer-key-here',
  consumer_secret: 'your-consumer-secret-here',
  access_token_key: 'your-accesss-token-here',
  access_token_secret: 'your-access-token-secret-here,
})
var a_o_foll = 0;
twitter.getCounts('roboti2c')
    .then(data => {
        a_o_foll = data.followersCount
    })
    .catch(err => {
        console.error(err.error);
    })
fs.writeFile('follow-TWIT.txt', a_o_foll)
