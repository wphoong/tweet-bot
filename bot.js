var config = require('./config.js');
var Twit = require("twit");
var TwitterBot = require("node-twitterbot").TwitterBot;
var Bot = new TwitterBot(config);
var Retweet = new Twit(config);

var phraseArray = [ "hey twitter",
                    "im tweeting",
                    "tweet tweet",
                    "tweetstorm time... 1/22",
                    "plz RT v important",
                    "delete ur account",
                    "it me",
                    "same",
                    "Dota 2 ftw!",
                    "Plebs...Plebs everywhere" ];

function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);
Bot.tweet(phrase);

// Retweeting

// find latest tweet according the query 'q' in params
var retweet = function() {
    var params = {
        q: '#Dota, #dota, #PUBG',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    };
    // for more parametes, see: https://dev.twitter.com/rest/reference/get/search/tweets

    Retweet.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet
            Retweet.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
  };

  // grab & retweet as soon as program is running...
  retweet();
  // retweet in every 50 minutes
  setInterval(retweet, 3000000);
