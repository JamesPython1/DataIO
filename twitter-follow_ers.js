const  TwitterClient = require('easy-twitter');
var fs = require('file-system');
const twitter = new TwitterClient({
  consumer_key: 'lOF160rWuee0bVX54mXuiieCa',
  consumer_secret: 'HscSxGGA5QmBZ7OgAqiuwNIG4SUxVU3aO3bH1jLkKzfHJEtOIj',
  access_token_key: '1059104460956413953-jEjGQdKngDvVuoY5rtrA3aDhW1O31D',
  access_token_secret: 'Kw4A6hJ7R6zeZjbfuxmmJeYUMmIHbTcFtX0jE82VjxIUg',
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
